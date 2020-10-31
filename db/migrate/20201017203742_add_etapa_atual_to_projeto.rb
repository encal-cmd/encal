class AddEtapaAtualToProjeto < ActiveRecord::Migration[5.2]
  def change
    add_column :projetos, :etapa_atual, :bigint
  end
end
