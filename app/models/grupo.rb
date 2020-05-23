class Grupo < ApplicationRecord
	belongs_to :user
  has_many :mensagens

	def integrantes
    ids = self.usuarios_permitidos.split(":::")
    return User.where(id: ids)
  end

  def integrantes_onesignal_ids
    one_sig_ids = []
    ids = self.usuarios_permitidos.split(":::")
    User.where(id: ids).each do |user|
      one_sig_ids += user.onesignal_users.map(&:one_signal_id)
    end
    return one_sig_ids
  end

  def ultima_msg
    ultima = self.mensagens.last
    puts ultima
    if ultima
      nome_usu = ultima.user.nome
      index_nome_usu = ultima.user.nome.index(" ")
      if index_nome_usu.present?
        nome_usu = nome_usu[0..index_nome_usu-1]
      end
      return "#{nome_usu}: #{ultima.msg}"
    else
      return ""
    end
  end
end
