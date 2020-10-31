class AddOrdemToEtapaProjeto < ActiveRecord::Migration[5.2]
  def change
    add_column :etapa_projetos, :ordem, :integer
  end
end
