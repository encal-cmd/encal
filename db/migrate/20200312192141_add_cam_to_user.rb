class AddCamToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :nome, :string
    add_column :users, :ativo, :boolean
  end
end
