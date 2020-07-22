class AddTituloToAprovacao < ActiveRecord::Migration[5.2]
  def change
    add_column :aprovacoes, :titulo, :string
  end
end
