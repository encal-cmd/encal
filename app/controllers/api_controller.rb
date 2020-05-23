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
        permissoes: params[:usuario][:permissoes]
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
    user = {id: user.id, nome: user.nome, email: user.email, cpf: user.cpf, ativo: user.ativo, permissoes: user.permissoes}
    render json: {status: 200, usuario: user}
  end

  def update_usuario
    if User.find(params[:user_id]).tem_permissao("editar_usuario")
      user = User.find(params[:id])
      a = params[:permissoes]
      params[:permissoes] = "#{params[:permissoes]}false" if a[a.size-2..a.size-1] == "||"
      params[:permissoes] = params[:permissoes].split("||").collect{|f| f.present? && f != "false" ? "true" : "false"}.join("||")
      user.update_attributes(nome: params[:nome], email: params[:email], cpf: params[:cpf], ativo: params[:ativo], permissoes: params[:permissoes])
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
    
    msgs = Mensagem.where(grupo_id: params[:grupo_id]).collect{|n| [
      n.user_id, 
      n.grupo_id, 
      n.created_at.strftime("%H:%M"),
      n.user.nome,
      n.msg,
      n.imagem.url,
      n.tipo,
      n.created_at.strftime("%d/%m/%Y")
    ]}

    puts "-- mensagens"
    puts msgs.inspect

    msgs_data = msgs.group_by { |d| d[7] }

    msg_data = []

    msgs_data.each do |data, msgs_dia|

      msg_data << [
        '',
        '',
        '',
        '',
        '',
        '',
        "data",
        data
      ]

      msg_data += msgs_dia

    end

    puts '-- msg data'
    puts msg_data.inspect


    render json: {status: 200, mensagens: msg_data}
  end

  # resetar senha
  # editar usuario

  # novo grupo
  # criar usuario
  # ver usuarios
  # ver grupos

end