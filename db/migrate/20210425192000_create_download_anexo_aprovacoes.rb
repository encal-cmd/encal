class CreateDownloadAnexoAprovacoes < ActiveRecord::Migration[5.2]
  def change
    create_table :download_anexo_aprovacoes do |t|
      t.references :anexo_aprovacao, index: true
      t.string :onesignal
      t.string :url

      t.timestamps
    end
  end
end
