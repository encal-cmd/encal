class RemovePermissaoIdsFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :permissoes
    remove_column :users, :permissao_ids
  end
end
