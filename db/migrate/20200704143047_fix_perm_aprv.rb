class FixPermAprv < ActiveRecord::Migration[5.2]
  def change
  	User.all.each do |user|
  		user.update_column(:permissoes, "#{user.permissoes}||false||false")
  	end
  end
end
