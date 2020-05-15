class ChangeMsgAtt < ActiveRecord::Migration[5.2]
  def self.up
    change_table :mensagens do |t|
      t.attachment :imagem
    end
  end

  def self.down
    remove_attachment :mensagens, :imagem
  end
end
