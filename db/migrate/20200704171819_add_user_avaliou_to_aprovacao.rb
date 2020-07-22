class AddUserAvaliouToAprovacao < ActiveRecord::Migration[5.2]
  def change
    add_column :aprovacoes, :user_avaliou_id, :bigint
  end
end
