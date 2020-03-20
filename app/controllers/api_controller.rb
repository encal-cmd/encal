class ApiController < ApplicationController

  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def login

    user = User.where(cpf: params[:cpf].get_only_digits).last

    if user && user.valid_password?(params[:senha])
      if user.ativo
        user = {id: user.id, nome: user.nome, email: user.email, cpf: user.cpf, ativo: user.ativo}
        render json: { status: "OK", usuario: user }
      else
        render json: { status: "USUARIO_DESATIVADO" }
      end
    else
      render json: { status: "USUARIO_NAO_ENCONTRADO" }
    end

  end

  def criar_usuario

    puts params.inspect

    user = User.create(
      cpf: params[:cpf].get_only_digits,
      password: "123456",
      email: params[:email],
      ativo: true,
      nome: params[:nome]
    )

    render json: {status: 200, user_id: user.id}
  end

  def listar_usuarios
    render json: {status: 200, usuarios: User.all.collect{|n| [n.id, n.nome, n.email, n.cpf, n.ativo]}}
  end


  def get_usuario
    user = User.find(params[:id])
    user = {id: user.id, nome: user.nome, email: user.email, cpf: user.cpf, ativo: user.ativo}
    render json: {status: 200, usuario: user}
  end

  def update_usuario
    user = User.find(params[:id])
    user.update_attributes(nome: params[:nome], email: params[:email], cpf: params[:cpf], ativo: params[:ativo])
    render json: {status: 200, resultado: "OK"}
  end

  def listar_grupos
    render json: {status: 200, grupos: Grupo.all.collect{|n| [n.id, n.nome, n.usuariosPermitidos]}}
  end

  def criar_grupo

    grupo = Grupo.create(
      nome: params[:nome],
      usuariosPermitidos: params[:usuariosPermitidos]
    )

    render json: {status: 200, grupo_id: grupo.id}
  end

  def criar_msg

    mensagem = Mensagem.create(
      grupo_id: params[:grupo_id],
      user_id: params[:user_id],
      msg: params[:msg]
    )

    render json: {status: 200, grupo_id: mensagem.id}
  end



end