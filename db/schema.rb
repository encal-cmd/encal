# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_26_013547) do

  create_table "anexo_aprovacoes", force: :cascade do |t|
    t.integer "aprovacao_id"
    t.string "anexo_file_name"
    t.string "anexo_content_type"
    t.bigint "anexo_file_size"
    t.datetime "anexo_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aprovacao_id"], name: "index_anexo_aprovacoes_on_aprovacao_id"
  end

  create_table "aprovacoes", force: :cascade do |t|
    t.string "avaliadores"
    t.string "status"
    t.integer "user_criou_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_avaliou_id"
    t.string "empresa"
    t.string "centro_custo"
    t.string "solicitante"
    t.datetime "data_solicitacao"
    t.datetime "data_entrega"
    t.string "horario"
    t.decimal "valor", precision: 10, scale: 2
    t.text "obsPagamento"
    t.string "titulo"
    t.integer "prestador_id"
    t.index ["prestador_id"], name: "index_aprovacoes_on_prestador_id"
  end

  create_table "download_anexo_aprovacoes", force: :cascade do |t|
    t.integer "anexo_aprovacao_id"
    t.string "onesignal"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["anexo_aprovacao_id"], name: "index_download_anexo_aprovacoes_on_anexo_aprovacao_id"
  end

  create_table "download_mensagens", force: :cascade do |t|
    t.integer "mensagem_id"
    t.string "onesignal"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mensagem_id"], name: "index_download_mensagens_on_mensagem_id"
  end

  create_table "etapa_projetos", force: :cascade do |t|
    t.string "nome"
    t.integer "porc"
    t.string "status"
    t.datetime "data_inicio"
    t.datetime "data_fim"
    t.integer "projeto_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ordem"
    t.index ["projeto_id"], name: "index_etapa_projetos_on_projeto_id"
  end

  create_table "grupo_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "grupo_usuarios_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["grupo_usuarios_id"], name: "index_grupo_users_on_grupo_usuarios_id"
    t.index ["user_id"], name: "index_grupo_users_on_user_id"
  end

  create_table "grupo_usuarios", force: :cascade do |t|
    t.string "permissao_ids"
    t.string "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grupos", force: :cascade do |t|
    t.string "nome"
    t.string "usuarios_permitidos"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_grupos_on_user_id"
  end

  create_table "mensagems", force: :cascade do |t|
    t.integer "user_id"
    t.integer "grupo_id"
    t.text "msg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "imagem_file_name"
    t.string "imagem_content_type"
    t.bigint "imagem_file_size"
    t.datetime "imagem_updated_at"
    t.string "tipo"
    t.index ["grupo_id"], name: "index_mensagems_on_grupo_id"
    t.index ["user_id"], name: "index_mensagems_on_user_id"
  end

  create_table "mensagens", force: :cascade do |t|
    t.integer "user_id"
    t.integer "grupo_id"
    t.text "msg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "imagem_file_name"
    t.string "imagem_content_type"
    t.bigint "imagem_file_size"
    t.datetime "imagem_updated_at"
    t.string "tipo"
    t.index ["grupo_id"], name: "index_mensagens_on_grupo_id"
    t.index ["user_id"], name: "index_mensagens_on_user_id"
  end

  create_table "onesignal_users", force: :cascade do |t|
    t.string "one_signal_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_onesignal_users_on_user_id"
  end

  create_table "pasta_planejamentos", force: :cascade do |t|
    t.integer "planejamento_id"
    t.string "nome"
    t.string "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["planejamento_id"], name: "index_pasta_planejamentos_on_planejamento_id"
  end

  create_table "permissoes", force: :cascade do |t|
    t.string "nome"
    t.string "codigo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "planejamentos", force: :cascade do |t|
    t.string "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "descricao"
    t.string "grupo_usu_ver_ids"
    t.string "grupo_usu_editar_ids"
  end

  create_table "prestadores", force: :cascade do |t|
    t.string "nome"
    t.string "banco"
    t.string "agencia"
    t.string "conta"
    t.string "cpf"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projetos", force: :cascade do |t|
    t.string "titulo"
    t.integer "porc"
    t.string "status"
    t.string "etapa"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "etapa_atual"
  end

  create_table "tarefas", force: :cascade do |t|
    t.integer "user_id"
    t.bigint "user_criou"
    t.datetime "data_limite"
    t.text "descricao"
    t.string "titulo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
    t.string "responsaveis"
    t.string "tipo"
    t.index ["user_id"], name: "index_tarefas_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "cpf"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "token"
    t.string "nome"
    t.boolean "ativo"
    t.boolean "admin"
    t.string "grupo_usu_ids"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
