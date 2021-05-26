class CreateGrupoUsuarios < ActiveRecord::Migration[5.2]
  def change
    create_table :grupo_usuarios do |t|
      t.string :permissao_ids
      t.string :nome

      t.timestamps
    end
  end
end
