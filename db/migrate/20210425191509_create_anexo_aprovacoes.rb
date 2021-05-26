class CreateAnexoAprovacoes < ActiveRecord::Migration[5.2]
  def change
    create_table :anexo_aprovacoes do |t|
      t.references :aprovacao, index: true
      t.attachment :anexo

      t.timestamps
    end
  end
end
