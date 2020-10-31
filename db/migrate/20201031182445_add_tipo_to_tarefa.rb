class AddTipoToTarefa < ActiveRecord::Migration[5.2]
  def change
    add_column :tarefas, :tipo, :string
  end
end
