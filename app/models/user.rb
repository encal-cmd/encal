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
    return true if permissao == "ver_aprovacao" && perms[6] == "true"
    return true if permissao == "criar_aprovacao" && perms[7] == "true"
    return true if permissao == "editar_aprovacao" && perms[8] == "true"
    return true if permissao == "ver_prestadores" && perms[9] == "true"
    return true if permissao == "criar_prestadores" && perms[10] == "true"
    return true if permissao == "editar_prestadores" && perms[11] == "true"
    return false
  end

  def atualizar_perms
    count_permissao = User.first.permissoes.split("||").count
    puts count_permissao
    string_true = ""
    string_false = ""
    if count_permissao < 12
      puts "eeeeee"
      (1..12-count_permissao).each do |k|
        string_true += "||true"
        string_false += "||false"
      end

      User.where(admin: [false,nil]).each do |user|
        puts "aaaaaaaaaaa"
        user.update_attribute(:permissoes, "#{user.permissoes}#{string_false}")
      end

      User.where(admin: true).each do |user|
        puts "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
        user.update_attribute(:permissoes, "#{user.permissoes}#{string_true}")
      end
    end

  end

end
