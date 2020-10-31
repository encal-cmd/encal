class CreateEtapaProjetos < ActiveRecord::Migration[5.2]
  def change
    create_table :etapa_projetos do |t|
      t.string :nome
      t.integer :porc
      t.string :status
      t.datetime :data_inicio
      t.datetime :data_fim
      t.references :projeto, index: true

      t.timestamps
    end
  end
end
