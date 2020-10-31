class CreateTarefas < ActiveRecord::Migration[5.2]
  def change
    create_table :tarefas do |t|
      t.references :user, index: true
      t.bigint :user_criou
      t.datetime :data_limite
      t.text :descricao
      t.string :titulo

      t.timestamps
    end
  end
end
