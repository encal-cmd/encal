class CreateAprovacoes < ActiveRecord::Migration[5.2]
  def change
    create_table :aprovacoes do |t|
      t.string :titulo
      t.text :descricao
      t.string :avaliadores
      t.string :status
      t.bigint :user_criou_id

      t.timestamps
    end
  end
end
