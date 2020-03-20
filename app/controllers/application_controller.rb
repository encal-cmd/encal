class ApplicationController < ActionController::Base
  # before_action :active_user

  before_action :authenticate_user!

  def active_user
    #Não deixa logar se estiver desativado
    if current_user
      render :plain => "Usuário desativado(a)" if !current_user.ativo
    end
  end

end
