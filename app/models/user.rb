class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  before_save :att_token, if: -> { new_record? }
  has_many :grupos
  has_many :onesignal_users

  def att_token
    self.token = Devise.friendly_token
  end

  def tem_permissao(permissao)
    perms = self.permissoes.split("||")
    return true if permissao == "ver_grupo" && perms[0] == "true"
    return true if permissao == "criar_grupo" && perms[1] == "true"
    return true if permissao == "ver_usuario" && perms[2] == "true"
    return true if permissao == "criar_usuario" && perms[3] == "true"
    return true if permissao == "editar_usuario" && perms[4] == "true"
    return true if permissao == "resetar_usuario" && perms[5] == "true"
    return false
  end

end
