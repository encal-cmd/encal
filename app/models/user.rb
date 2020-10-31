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
    perms_ids = self.permissao_ids.split("||").map{|n| n.to_i}
    perms = Permissao.where(id: perms_ids).map(&:codigo)
    return perms.include?(permissao)
  end

  def self.atualizar_perms
    count_permissao = User.first.permissoes.split("||").count
    puts count_permissao
    string_true = ""
    string_false = ""
    if count_permissao < 13
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

  def self.att_perm
    string_true = "true"
    num = Permissao.count
    (1..num-1).each do |k|
      string_true += "||true"
      # string_false += "||false"
    end
    User.update_all(permissoes: string_true, permissao_ids: Permissao.all.map(&:id).join("||"))
  end

end
