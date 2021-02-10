class Aprovacao < ApplicationRecord
  belongs_to :prestador, optional: true

  def user_avaliou
    return User.where(id: self.user_avaliou_id).last
  end

  def mandar_notificacao(status)

    if self.user_criou && !self.user_criou.onesignal_users.empty?
      url = 'https://onesignal.com/api/v1/notifications';

      if status == "APROVADO"
        content = "Seu requerimento foi aprovado !"
      elsif status == "NEGADO"
        content = "Seu requerimento foi negado !"
      end

      envio = HTTParty.post(url, { 
        body: {
            "app_id" => "da5bb7a2-00f8-4809-90b0-525a4b5143f2", 
            "headings" => {"en" => "Aprovacão (#{self.titulo})"},
            "contents" => {"en" => content},
            "data" => {"tipo" => "aprovacao", "aprovacao_id" => self.id},
            "include_player_ids" => self.user_criou.onesignal_users.map(&:one_signal_id)
        }.as_json.to_json,
        headers: { 'Content-Type' => 'application/json;charset=utf-8' }, timeout: 1000
      })
    end

  end

  def user_criou
    return User.find(self.user_criou_id)
  end
end
