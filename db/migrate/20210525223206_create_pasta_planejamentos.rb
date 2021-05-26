class CreatePastaPlanejamentos < ActiveRecord::Migration[5.2]
  def change
    create_table :pasta_planejamentos do |t|
      t.references :planejamento, index: true
      t.string :nome
      t.string :link

      t.timestamps
    end
  end
end
