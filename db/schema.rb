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

ActiveRecord::Schema.define(version: 2020_05_23_001835) do

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
    t.string "permissoes"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
