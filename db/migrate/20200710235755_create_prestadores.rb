class CreatePrestadores < ActiveRecord::Migration[5.2]
  def change
    create_table :prestadores do |t|
      t.string :nome
      t.string :banco
      t.string :agencia
      t.string :conta
      t.string :cpf

      t.timestamps
    end
  end
end
