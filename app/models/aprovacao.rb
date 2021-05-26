class Aprovacao < ApplicationRecord
  belongs_to :prestador, optional: true
  has_many :anexo_aprovacoes, dependent: :destroy

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

  def listar_anexos(params)

    onesig = params[:onesigId]
    aprov_id = self.id
    # onesig = "309c764d-4be2-4622-b38b-51e7a7d1c53f"
    # aprov_id = 16

    sql = %Q{
      SELECT anexo_aprovacoes.id as anexo_aprov_id, anexo_aprovacoes.anexo_file_name, anexo_aprovacoes.anexo_content_type, download_anexo_aprovacoes.url as down_url, anexo_aprovacoes.id as anexo_aprovacoes_id
      FROM aprovacoes
      LEFT JOIN anexo_aprovacoes on anexo_aprovacoes.aprovacao_id = aprovacoes.id
      LEFT JOIN download_anexo_aprovacoes on download_anexo_aprovacoes.anexo_aprovacao_id = anexo_aprovacoes.id AND download_anexo_aprovacoes.onesignal = '#{onesig}'
      WHERE aprovacoes.id = #{aprov_id}
    }

    @dados = ActiveRecord::Base.connection.select_all(sql)

    msgs = []

    @dados.each do |dado|
      msgs << [
        dado["anexo_aprov_id"],
        AnexoAprovacao.list_img_url(dado["anexo_file_name"], dado["anexo_aprovacoes_id"].to_i),
        Mensagem.anexo_extensao_in(dado["anexo_file_name"]),
        dado["anexo_file_name"],
        dado["down_url"],
        dado["anexo_content_type"],
        false
      ]
    end

    return msgs
  end

end
