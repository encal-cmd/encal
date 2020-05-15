class AddTipoToMensagem < ActiveRecord::Migration[5.2]
  def change
    add_column :mensagems, :tipo, :string
  end
end
