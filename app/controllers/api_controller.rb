class ApiController < ApplicationController

  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token


  # this.form.value.verGrupo,
  # this.form.value.criarGrupo,
  # this.form.value.verUsu,
  # this.form.value.criarUsu,
  # this.form.value.editUsu,
  # this.form.value.resetSenha,

  def login
    user = User.where(cpf: params[:cpf].get_only_digits).last
    if user && user.valid_password?(params[:senha])
      if user.ativo
        user = {id: user.id, nome: user.nome, email: user.email, cpf: user.cpf, ativo: user.ativo, permissoes: user.permissoes}
        render json: { status: "OK", usuario: user }
      else
        render json: { status: "USUARIO_DESATIVADO" }
      end
    else
      render json: { status: "USUARIO_NAO_ENCONTRADO" }
    end
  end

  def criar_usuario
    if User.find(params[:user_id]).tem_permissao("criar_usuario")
      a = params[:usuario][:permissoes]
      params[:usuario][:permissoes] = "#{params[:usuario][:permissoes]}false" if a[a.size-2..a.size-1] == "||"
      params[:usuario][:permissoes] = params[:usuario][:permissoes].split("||").collect{|f| f.present? && f != "false" ? "true" : "false"}.join("||")

      user = User.create(
        cpf: params[:usuario][:cpf].get_only_digits,
        password: "123456",
        email: params[:usuario][:email],
        ativo: true,
        nome: params[:usuario][:nome],
        permissoes: params[:usuario][:permissoes],
        permissao_ids: params[:usuario][:permissoesIds]
      )
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def listar_usuarios
    render json: {status: 200, usuarios: User.all.collect{|n| [n.id, n.nome, n.email, n.cpf, n.ativo, n.permissoes]}}
  end

  def get_usuario
    user = User.find(params[:id])
    user = {id: user.id, nome: user.nome, email: user.email, cpf: user.cpf, ativo: user.ativo, permissoes: user.permissoes, permissoesIds: user.permissao_ids}
    render json: {status: 200, usuario: user}
  end

  def update_usuario
    if User.find(params[:user_id]).tem_permissao("editar_usuario")
      user = User.find(params[:id])
      a = params[:permissoes]
      params[:permissoes] = "#{params[:permissoes]}false" if a[a.size-2..a.size-1] == "||"
      params[:permissoes] = params[:permissoes].split("||").collect{|f| f.present? && f != "false" ? "true" : "false"}.join("||")
      user.update_attributes(nome: params[:nome], email: params[:email], cpf: params[:cpf], ativo: params[:ativo], permissoes: params[:permissoes], permissao_ids: params[:permissoesIds])
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def listar_grupos
    where_perm = "usuarios_permitidos LIKE '#{params[:user_id]}:%' OR usuarios_permitidos LIKE '%:#{params[:user_id]}' OR usuarios_permitidos LIKE '%:#{params[:user_id]}:%'"
    render json: {status: 200, grupos: Grupo.where(where_perm).collect{|n| [n.id, n.nome, n.usuarios_permitidos, n.ultima_msg]}}
  end

  def listar_grupos_img
    imagens = []
    Mensagem.where(grupo_id: params[:grupo_id], tipo: "imagem").each do |m|
      imagens.push(m.imagem.url)
    end
    render json: {status: 200, imagens: imagens}
  end

  def listar_anexos_grupo
    grupo = Grupo.find(params[:grupo_id])
    if grupo
      render json: {status: 200, mensagens: grupo.listar_anexos(params)}
    else
      render json: {status: 200, mensagens: []}
    end
  end

  def criar_grupo
    user = User.find(params[:user_id])
    if user && user.tem_permissao("criar_grupo")
      grupo = Grupo.create(
        nome: params[:grupo][:nome],
        usuarios_permitidos: params[:grupo][:usuariosPermitidos],
        user_id: user.id
      )
      # render json: {status: 200, grupo_id: grupo.id}
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def get_grupo
    grupo = Grupo.find(params[:grupo_id])
    grp = {id: grupo.id, nome: grupo.nome, usuariosPermitidos: grupo.usuarios_permitidos}
    render json: {status: 200, grupo: grp}
  end

  def criar_msg
    mensagem = Mensagem.create(
      grupo_id: params[:grupo_id],
      user_id: params[:user_id],
      msg: params[:msg],
      tipo: "msg"
    )
    render json: {status: 200, grupo_id: mensagem.id}
  end

  def criar_msg_imagem
    mensagem = Mensagem.new(
      grupo_id: params[:grupo_id],
      user_id: params[:user_id],
      tipo: "imagem"
    )
    mensagem.update_imagem(params[:base64])
    mensagem.save
    render json: {status: 200, grupo_id: mensagem.id}
  end

  def resetar_senha
    user = User.find(params[:id])
    user.password = "123456"
    user.save
    render json: {status: 200, resultado: "OK"}
  end

  def alterar_senha
    user = User.find(params[:id])
    user.password = params[:senha]
    user.save
    render json: {status: 200, resultado: "OK"}
  end

  def att_grupo
    user = User.find(params[:user_id])
    grupo = Grupo.find(params[:grupo][:id])
    if grupo.usuarios_permitidos.split(":::").include?(user.id.to_s) || grupo.user == user
      grupo.update_attributes(
        nome: params[:grupo][:nome],
        usuarios_permitidos: params[:grupo][:usuariosPermitidos]
      )
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def set_user_onesignal
    user = User.find(params[:user_id])
    onesig = user.onesignal_users.where(one_signal_id: params[:onesignal_id]).last
    user.onesignal_users.create(one_signal_id: params[:onesignal_id]) if !onesig
    render json: {status: "OK"}
  end

  def listar_mesagens
    render json: {status: 200, mensagens: Mensagem.listar_mensagens(params)}
  end

  def up_file

    mensagem = Mensagem.create(
      grupo_id: params[:grupo_id],
      user_id: params[:user_id],
      tipo: "anexo"
    )

    mensagem.update_attribute(:imagem, params[:file])

    render json: {status: 200}
  end

  def criar_aprovacao
    user = User.find(params[:user_id])
    if user && user.tem_permissao("criar_aprovacao")
      grupo = Aprovacao.create(
        titulo: params[:aprovacao][:titulo],
        empresa: "Encal",
        centro_custo: params[:aprovacao][:centroCusto],
        solicitante: params[:aprovacao][:solicitante],
        data_solicitacao: params[:aprovacao][:dataSolicitacao].to_datetime,
        data_entrega: params[:aprovacao][:dataEntrega].to_datetime,
        valor: params[:aprovacao][:valor],
        obsPagamento: params[:aprovacao][:obsPagamento],
        avaliadores: params[:aprovacao][:avaliadores].collect{|n| n["id"]}.join("||"),
        user_criou_id: user.id,
        prestador_id: params[:aprovacao][:prestador_id],
        status: "PENDENTE"
      )
      # render json: {status: 200, grupo_id: grupo.id}
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def editar_aprovacao
    user = User.find(params[:user_id])
    if user && user.tem_permissao("editar_aprovacao")
      aprov = Aprovacao.find(params[:aprovacao][:id])
      obj = aprov.update_attributes(
        titulo: params[:aprovacao][:titulo],
        centro_custo: params[:aprovacao][:centroCusto],
        solicitante: params[:aprovacao][:solicitante],
        data_solicitacao: params[:aprovacao][:dataSolicitacao].to_datetime,
        data_entrega: params[:aprovacao][:dataEntrega].to_datetime,
        obsPagamento: params[:aprovacao][:obsPagamento],
        avaliadores: params[:aprovacao][:avaliadores].collect{|n| n["id"]}.join("||"),
        prestador_id: params[:aprovacao][:prestador_id],
      )
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def listar_aprovacoes
    user = User.find(params[:user_id])
    if user && user.tem_permissao("ver_aprovacao")
      lista_aprovacoes = Aprovacao.all.collect{|n| [
        n.id,
        n.empresa,
        n.centro_custo,
        n.solicitante,
        (n.data_solicitacao.strftime("%d/%m/%Y") rescue nil),
        (n.data_entrega.strftime("%d/%m/%Y") rescue nil),
        n.valor,
        n.obsPagamento,
        n.avaliadores,
        n.user_criou_id,
        n.status,
        (n.user_avaliou.nome rescue ""),
        n.titulo
      ]}
      render json: {status: 200, aprovacoes: lista_aprovacoes}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def get_aprovacao
    aprovacao = Aprovacao.find(params[:aprovacao_id])
    apv = [
      aprovacao.id,
      aprovacao.empresa,
      aprovacao.centro_custo,
      aprovacao.solicitante,
      (aprovacao.data_solicitacao.strftime("%d/%m/%Y") rescue nil),
      (aprovacao.data_entrega.strftime("%d/%m/%Y") rescue nil),
      aprovacao.valor,
      aprovacao.obsPagamento,
      aprovacao.avaliadores,
      aprovacao.user_criou_id,
      aprovacao.status,
      (aprovacao.user_avaliou.nome rescue ""),
      aprovacao.titulo,
      (aprovacao.prestador.nome rescue ""),
      (aprovacao.prestador.banco rescue ""),
      (aprovacao.prestador.agencia rescue ""),
      (aprovacao.prestador.conta rescue ""),
      (aprovacao.prestador.cpf rescue ""),
      (aprovacao.prestador.id rescue ""),
    ]
    render json: {status: 200, aprovacao: apv}
  end

  def avaliar_aprovacao
    aprovacao = Aprovacao.find(params[:aprovacao_id])
    if aprovacao.avaliadores.split("||").include?(params[:user_id].to_s)
      status = params[:acao] == "APROVAR" ? "APROVADO" : "NEGADO"
      aprovacao.update_attributes(status: status, user_avaliou_id: params[:user_id])
      aprovacao.mandar_notificacao(status)
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def apagar_aprovacao
    obj = Prestador.find(params[:aprovacao_id])
    if obj.user_criou_id == params[:user_id]
      obj.destroy
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def criar_prestadores
    user = User.find(params[:user_id])
    if user && user.tem_permissao("criar_prestadores")
      grupo = Prestador.create(
        nome: params[:objeto][:nome],
        banco: params[:objeto][:banco],
        agencia: params[:objeto][:agencia],
        conta: params[:objeto][:conta],
        cpf: params[:objeto][:cpf]
      )
      # render json: {status: 200, grupo_id: grupo.id}
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def editar_prestadores
    user = User.find(params[:user_id])
    if user && user.tem_permissao("editar_prestadores")
      obj = Prestador.find(params[:objeto][:id]).update_attributes(
        nome: params[:objeto][:nome],
        banco: params[:objeto][:banco],
        agencia: params[:objeto][:agencia],
        conta: params[:objeto][:conta],
        cpf: params[:objeto][:cpf]
      )
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def listar_prestadores
    user = User.find(params[:user_id])
    if user && user.tem_permissao("ver_prestadores")
      lista = Prestador.all.collect{|n| [
        n.id,
        n.nome,
        n.banco,
        n.agencia,
        n.conta,
        n.cpf,
      ]}
      puts lista.inspect
      render json: {status: 200, lista: lista}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def get_prestadores
    obj = Prestador.find(params[:id])
    rst = [
      obj.id,
      obj.nome,
      obj.banco,
      obj.agencia,
      obj.conta,
      obj.cpf,
    ]
    render json: {status: 200, obj: rst}
  end

  def attdownload
    msg = Mensagem.find(params[:msg_id])
    msg.download_mensagens.create(onesignal: params[:onesig], url: params[:url])
    render json: {status: "OK"}
  end

  def criar_tarefa
    user = User.find(params[:user_id])
    if user && user.tem_permissao("criar_tarefa")
      obj = Tarefa.create(
        titulo: params[:objeto][:titulo],
        descricao: params[:objeto][:descricao],
        tipo: params[:objeto][:tipo],
        data_limite: params[:objeto][:data_limite].to_datetime,
        # user_id: params[:objeto][:user_id],
        responsaveis: params[:objeto][:user_id].collect{|n| n["id"]}.join("||"),
        user_criou: params[:user_id],
        status: "PENDENTE"
      )
      obj.mandar_notificacao("CRIACAO")
      # render json: {status: 200, grupo_id: grupo.id}
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def editar_tarefa
    user = User.find(params[:user_id])
    tarefa = Tarefa.find(params[:objeto][:id])
    if user && user.id == tarefa.user_criou
      obj = tarefa.update_attributes(
        titulo: params[:objeto][:titulo],
        descricao: params[:objeto][:descricao],
        tipo: params[:objeto][:tipo],
        data_limite: params[:objeto][:data_limite],
        responsaveis: params[:objeto][:user_id].collect{|n| n["id"]}.join("||")
      )
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def listar_tarefas
    user = User.find(params[:user_id])
    if user
      lista = Tarefa.where(tipo: "tarefa").select{|n| n.responsaveis.split("||").include?(params[:user_id].to_s)}.collect{|n| [
        n.id,
        n.titulo,
        n.descricao,
        n.data_limite,
        n.responsaveis,
        n.user_criou,
        n.status,
        n.tipo
      ]}
      puts lista.inspect
      render json: {status: 200, lista: lista}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def get_tarefa
    obj = Tarefa.find(params[:id])
    rst = [
      obj.id,
      obj.titulo,
      obj.descricao,
      obj.data_limite,
      obj.responsaveis,
      obj.user_criou,
      obj.status,
      obj.tipo
    ]
    render json: {status: 200, obj: rst}
  end

  def finalizar_tarefa
    obj = Tarefa.find(params[:id])
    if obj.responsaveis.split("||").include?(params[:user_id].to_s)
      obj.update_attributes(status: "FINALIZADO")
      obj.mandar_notificacao("FINALIZADO")
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def criar_projeto
    user = User.find(params[:user_id])
    if user && user.tem_permissao("criar_projeto")
      obj = Projeto.create(
        titulo: params[:objeto][:titulo],
        porc: 0,
        status: "PENDENTE",
      )
      # obj.mandar_notificacao("CRIACAO")
      # render json: {status: 200, grupo_id: grupo.id}
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def editar_projeto
    user = User.find(params[:user_id])
    obj = Projeto.find(params[:objeto][:id])
    if user && user.tem_permissao("editar_projeto")
      obj.update_attributes(
        titulo: params[:objeto][:titulo]
      )
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def listar_projetos
    user = User.find(params[:user_id])
    if user
      lista = Projeto.all.collect{|n| [
        n.id,
        n.titulo,
        n.status
      ]}
      puts lista.inspect
      render json: {status: 200, lista: lista}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def get_projeto
    obj = Projeto.find(params[:id])
    rst = [
      obj.id,
      obj.titulo,
      obj.status,
      obj.etapas,
      obj.etapa_atual
    ]
    render json: {status: 200, obj: rst}
  end

  def get_etapa_projeto
    obj = EtapaProjeto.find(params[:id])
    rst = [
      obj.id,
      obj.nome,
      obj.status,
      obj.data_inicio,
      obj.data_fim,
      obj.projeto_id,
    ]
    render json: {status: 200, obj: rst}
  end

  def editar_etapa_projeto
    user = User.find(params[:user_id])
    obj = EtapaProjeto.find(params[:objeto][:id])
    if user && user.tem_permissao("editar_projeto")
      obj.update_attributes(
        data_inicio: params[:objeto][:data_ini].to_datetime,
        data_fim: params[:objeto][:data_fim].to_datetime
      )
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def finalizar_etapa_projeto
    user = User.find(params[:user_id])
    obj = EtapaProjeto.find(params[:id])
    if user && user.tem_permissao("editar_projeto")
      obj.finalizar
      render json: {status: "OK"}
    else
      render json: {status: "Usuário sem permissão"}
    end
  end

  def listar_permissoes
    render json: {status: 200, lista: Permissao.all.collect{|n| [n.id, n.nome]}}
  end

  def listar_calendario
    agenda = []
    agenda = Tarefa.all.select{|n| n.responsaveis.split("||").include?(params[:user_id].to_s)}.collect{|n| [
      n.titulo,
      n.descricao,
      n.status,
      n.data_limite,
      n.tipo,
      n.id
    ]}
    render json: {status: 200, lista: agenda}
  end


  # resetar senha
  # editar usuario

  # novo grupo
  # criar usuario
  # ver usuarios
  # ver grupos

end