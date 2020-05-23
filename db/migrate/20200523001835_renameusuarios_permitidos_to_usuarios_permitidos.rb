class RenameusuariosPermitidosToUsuariosPermitidos < ActiveRecord::Migration[5.2]
  def change
  	rename_column :grupos, :usuariosPermitidos, :usuarios_permitidos
  end
end
