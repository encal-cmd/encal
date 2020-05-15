class AddAttachmentImagemToMensagems < ActiveRecord::Migration[5.2]
  def self.up
    change_table :mensagems do |t|
      t.attachment :imagem
    end
  end

  def self.down
    remove_attachment :mensagems, :imagem
  end
end
