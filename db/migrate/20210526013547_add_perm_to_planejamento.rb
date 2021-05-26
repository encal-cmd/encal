class AddPermToPlanejamento < ActiveRecord::Migration[5.2]
  def change
    add_column :planejamentos, :grupo_usu_ver_ids, :string
    add_column :planejamentos, :grupo_usu_editar_ids, :string
  end
end
