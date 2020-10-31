class Tarefa < ApplicationRecord
  belongs_to :user, optional: true

  def mandar_notificacao(status)

    url = 'https://onesignal.com/api/v1/notifications';

    if status == "CRIACAO"
      content = "Nova Tarefa !"
      player_ids = user_responsaveis_onesig
    elsif status == "FINALIZADO"
      content = "Tarefa Concluida !"
      player_ids = self.user_que_criou.onesignal_users.map(&:one_signal_id)
    end

    if !player_ids.empty?
      envio = HTTParty.post(url, { 
        body: {
            "app_id" => "da5bb7a2-00f8-4809-90b0-525a4b5143f2", 
            "headings" => {"en" => "Tarefa (#{self.titulo})"},
            "contents" => {"en" => content},
            "data" => {"tipo" => "tarefa", "tarefa_id" => self.id},
            "include_player_ids" => player_ids
        }.as_json.to_json,
        headers: { 'Content-Type' => 'application/json;charset=utf-8' }, timeout: 1000
      })
    end
    
  end

  def user_que_criou
    return User.find(self.user_criou)
  end

  def user_responsaveis
    return User.where(id: self.responsaveis.split("||"))
  end

  def user_responsaveis_onesig
    one_signal_ids = []
    self.user_responsaveis.map(&:onesignal_users).each do |one|
      one_signal_ids += one.map(&:one_signal_id)
    end
    return one_signal_ids.select{|n| n.present?}
  end

end
