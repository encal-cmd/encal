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

  def listar_anexos(params)
    sql = %Q{
      SELECT users.id as user_id, users.nome as user_nome, mensagens.grupo_id, mensagens.created_at, mensagens.msg, mensagens.tipo,
      mensagens.imagem_file_name, mensagens.id as msg_id, mensagens.imagem_content_type, download_mensagens.url as down_url
      FROM mensagens
      LEFT JOIN users on users.id = mensagens.user_id
      LEFT JOIN download_mensagens on download_mensagens.mensagem_id = mensagens.id AND download_mensagens.onesignal = '#{params[:onesigId]}'
      WHERE mensagens.grupo_id = #{self.id} AND (mensagens.tipo = 'imagem' OR mensagens.tipo = 'anexo')
    }

    # sql = %Q{
    #   SELECT users.id as user_id, users.nome as user_nome, mensagens.grupo_id, mensagens.created_at, mensagens.msg, mensagens.tipo,
    #   mensagens.imagem_file_name, mensagens.id as msg_id, mensagens.imagem_content_type, download_mensagens.url as down_url
    #   FROM mensagens
    #   LEFT JOIN users on users.id = mensagens.user_id
    #   LEFT JOIN download_mensagens on download_mensagens.mensagem_id = mensagens.id AND download_mensagens.onesignal = '309c764d-4be2-4622-b38b-51e7a7d1c53f'
    #   WHERE mensagens.grupo_id = 4
    # }

    @dados = ActiveRecord::Base.connection.select_all(sql)

    @dados.each do |dado|
      puts dado.inspect
      puts "   "
    end

    msgs = []

    @dados.each do |dado|
      msgs << [
        dado["user_id"].to_i,
        dado["grupo_id"].to_i,
        dado["created_at"].to_datetime.strftime("%H:%M"),
        dado["user_nome"],
        dado["msg"],
        Mensagem.list_img_url(dado["imagem_file_name"], dado["msg_id"].to_i),
        dado["tipo"],
        dado["created_at"].to_datetime.strftime("%d/%m/%Y"),
        Mensagem.anexo_extensao_in(dado["imagem_file_name"]),
        dado["imagem_file_name"],
        dado["msg_id"].to_i,
        dado["down_url"],
        dado["imagem_content_type"],
      ]
    end

    return msgs
  end
end
