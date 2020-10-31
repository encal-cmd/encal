class AddStatusToTarefa < ActiveRecord::Migration[5.2]
  def change
    add_column :tarefas, :status, :string
  end
end
