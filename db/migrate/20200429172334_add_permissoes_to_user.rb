class AddPermissoesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :permissoes, :string
  end
end
