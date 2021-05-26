class FixGrupoPermissaoIdsFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :grupo_ids
    remove_column :users, :grupo_usuario_id
    add_column :users, :grupo_usu_ids, :string
  end
end
  