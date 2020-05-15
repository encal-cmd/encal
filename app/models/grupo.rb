class Grupo < ApplicationRecord
	belongs_to :user

	def integrantes
    ids = self.usuariosPermitidos.split(":::")
    return User.where(id: ids)
  end

  def integrantes_onesignal_ids
    one_sig_ids = []
    ids = self.usuariosPermitidos.split(":::")
    User.where(id: ids).each do |user|
      one_sig_ids += user.onesignal_users.map(&:one_signal_id)
    end
    return one_sig_ids
  end

end
