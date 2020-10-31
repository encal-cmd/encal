class AddPermissaoIdsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :permissao_ids, :string
  end
end
