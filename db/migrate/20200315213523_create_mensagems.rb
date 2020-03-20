class CreateMensagems < ActiveRecord::Migration[5.2]
  def change
    create_table :mensagems do |t|
      t.references :user, index: true
      t.references :grupo, index: true
      t.text :msg

      t.timestamps
    end
  end
end
