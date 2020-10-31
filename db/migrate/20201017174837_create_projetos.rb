class CreateProjetos < ActiveRecord::Migration[5.2]
  def change
    create_table :projetos do |t|
      t.string :titulo
      t.integer :porc
      t.string :status
      t.string :etapa

      t.timestamps
    end
  end
end
