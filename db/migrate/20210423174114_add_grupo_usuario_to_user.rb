class AddGrupoUsuarioToUser < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :grupo_usuario, index: true
  end
end
