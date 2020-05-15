class ChangeMsg < ActiveRecord::Migration[5.2]
  def change
    drop_table :mensagems
    create_table :mensagens do |t|
      t.references :user, index: true
      t.references :grupo, index: true
      t.text :msg
      t.string :tipo

      t.timestamps
    end
  end
end
