Rails.application.routes.draw do
  
  root to: 'application#index'
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match "/api/login" => 'api#login', via: [:get, :post]
  match "/api/criar_usuario" => 'api#criar_usuario', via: [:get, :post, :options]
  match "/api/listar_usuarios" => 'api#listar_usuarios', via: [:get, :post, :options]
  match "/api/get_usuario" => 'api#get_usuario', via: [:get, :post, :options]
  match "/api/update_usuario" => 'api#update_usuario', via: [:get, :post, :options]
  match "/api/resetar_senha" => 'api#resetar_senha', via: [:get, :post, :options]
  match "/api/alterar_senha" => 'api#alterar_senha', via: [:get, :post, :options]
  match "/api/set_user_onesignal" => 'api#set_user_onesignal', via: [:get, :post, :options]

  match "/api/criar_grupo" => 'api#criar_grupo', via: [:get, :post, :options]
  match "/api/listar_grupos" => 'api#listar_grupos', via: [:get, :post, :options]
  match "/api/listar_grupos_img" => 'api#listar_grupos_img', via: [:get, :post, :options]
  match "/api/get_grupo" => 'api#get_grupo', via: [:get, :post, :options]
  match "/api/att_grupo" => 'api#att_grupo', via: [:get, :post, :options]

  match "/api/criar_msg" => 'api#criar_msg', via: [:get, :post, :options]
  match "/api/criar_msg_imagem" => 'api#criar_msg_imagem', via: [:get, :post, :options]

  match "/api/listar_mesagens" => 'api#listar_mesagens', via: [:get, :post, :options]
  
end
