class AddDescricaoToPastaPlanejamento < ActiveRecord::Migration[5.2]
  def change
    add_column :pasta_planejamentos, :descricao, :text
  end
end
