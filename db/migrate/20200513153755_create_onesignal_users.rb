class CreateOnesignalUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :onesignal_users do |t|
      t.string :one_signal_id
      t.references :user, index: true

      t.timestamps
    end
  end
end
