Rails.application.routes.draw do
  
  root to: 'application#index'
  
  devise_for :users

  resources :users, path: "/controle_de_usuarios"
  resources :grupos

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match "/login_acesso" => "users#login_acesso", as: :login_acesso, via: [:get, :post]

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
  match "/api/listar_anexos_grupo" => 'api#listar_anexos_grupo', via: [:get, :post, :options]
  match "/api/get_grupo" => 'api#get_grupo', via: [:get, :post, :options]
  match "/api/att_grupo" => 'api#att_grupo', via: [:get, :post, :options]

  match "/api/criar_msg" => 'api#criar_msg', via: [:get, :post, :options]
  match "/api/criar_msg_imagem" => 'api#criar_msg_imagem', via: [:get, :post, :options]

  match "/api/criar_aprovacao" => 'api#criar_aprovacao', via: [:get, :post, :options]
  match "/api/editar_aprovacao" => 'api#editar_aprovacao', via: [:get, :post, :options]
  match "/api/listar_aprovacoes" => 'api#listar_aprovacoes', via: [:get, :post, :options]
  match "/api/get_aprovacao" => 'api#get_aprovacao', via: [:get, :post, :options]
  match "/api/avaliar_aprovacao" => 'api#avaliar_aprovacao', via: [:get, :post, :options]
  match "/api/apagar_aprovacao" => 'api#apagar_aprovacao', via: [:get, :post, :options]

  match "/api/criar_prestadores" => 'api#criar_prestadores', via: [:get, :post, :options]
  match "/api/listar_prestadores" => 'api#listar_prestadores', via: [:get, :post, :options]
  match "/api/get_prestadores" => 'api#get_prestadores', via: [:get, :post, :options]
  match "/api/editar_prestadores" => 'api#editar_prestadores', via: [:get, :post, :options]

  match "/api/listar_mesagens" => 'api#listar_mesagens', via: [:get, :post, :options]
  
  match "/api/attdownload" => 'api#attdownload', via: [:get, :post, :options]
  match "/api/attdownload_aprovacao" => 'api#attdownload_aprovacao', via: [:get, :post, :options]

  match "/api/up_file" => 'api#up_file', via: [:get, :post, :options]
  match "/api/up_file_aprovacao" => 'api#up_file_aprovacao', via: [:get, :post, :options]

  match "/api/criar_tarefa" => 'api#criar_tarefa', via: [:get, :post, :options]
  match "/api/listar_tarefas" => 'api#listar_tarefas', via: [:get, :post, :options]
  match "/api/editar_tarefa" => 'api#editar_tarefa', via: [:get, :post, :options]
  match "/api/get_tarefa" => 'api#get_tarefa', via: [:get, :post, :options]
  match "/api/finalizar_tarefa" => 'api#finalizar_tarefa', via: [:get, :post, :options]

  match "/api/criar_projeto" => 'api#criar_projeto', via: [:get, :post, :options]
  match "/api/listar_projetos" => 'api#listar_projetos', via: [:get, :post, :options]
  match "/api/editar_projeto" => 'api#editar_projeto', via: [:get, :post, :options]
  match "/api/get_projeto" => 'api#get_projeto', via: [:get, :post, :options]
  match "/api/get_etapa_projeto" => 'api#get_etapa_projeto', via: [:get, :post, :options]
  match "/api/editar_etapa_projeto" => 'api#editar_etapa_projeto', via: [:get, :post, :options]
  match "/api/finalizar_etapa_projeto" => 'api#finalizar_etapa_projeto', via: [:get, :post, :options]

  match "/api/listar_permissoes" => 'api#listar_permissoes', via: [:get, :post, :options]
  match "/api/listar_calendario" => 'api#listar_calendario', via: [:get, :post, :options]

  match "/api/criar_grupo_usuario" => 'api#criar_grupo_usuario', via: [:get, :post, :options]
  match "/api/listar_grupo_usuarios" => 'api#listar_grupo_usuarios', via: [:get, :post, :options]
  match "/api/get_grupo_usuario" => 'api#get_grupo_usuario', via: [:get, :post, :options]
  match "/api/update_grupo_usuario" => 'api#update_grupo_usuario', via: [:get, :post, :options]

  match "/api/criar_planejamento" => 'api#criar_planejamento', via: [:get, :post, :options]
  match "/api/editar_planejamento" => 'api#editar_planejamento', via: [:get, :post, :options]
  match "/api/listar_planejamentos" => 'api#listar_planejamentos', via: [:get, :post, :options]
  match "/api/get_planejamento" => 'api#get_planejamento', via: [:get, :post, :options]
  match "/api/get_pasta_planejamento" => 'api#get_pasta_planejamento', via: [:get, :post, :options]
  match "/api/editar_etapa_planejamento" => 'api#editar_etapa_planejamento', via: [:get, :post, :options]

end
