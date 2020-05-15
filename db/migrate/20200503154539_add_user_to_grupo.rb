class AddUserToGrupo < ActiveRecord::Migration[5.2]
  def change
    add_reference :grupos, :user, index: true
  end
end
