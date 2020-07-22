class CreateDownloadMensagens < ActiveRecord::Migration[5.2]
  def change
    create_table :download_mensagens do |t|
      t.references :mensagem, index: true
      t.string :onesignal
      t.string :url

      t.timestamps
    end
  end
end
