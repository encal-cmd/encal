class AddGrupoIdsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :grupo_ids, :string
  end
end
