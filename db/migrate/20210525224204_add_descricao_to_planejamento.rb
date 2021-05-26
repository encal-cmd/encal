class AddDescricaoToPlanejamento < ActiveRecord::Migration[5.2]
  def change
    add_column :planejamentos, :descricao, :string
  end
end
