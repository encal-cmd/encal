class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [ :login_acesso ]

  def login_acesso

    puts " SEGSEJGSJEG"

    user = User.where(cpf: params[:cpf]).last
    puts user.inspect

    if user && user.valid_password?(params[:senha])
      puts user.inspect
      puts user.ativo
      if user.ativo
        render json: { status: "OK" }
      else
        render json: { status: "USUARIO_DESATIVADO" }
      end
    else
      render json: { status: "USUARIO_NAO_ENCONTRADO" }
    end

  end

end
