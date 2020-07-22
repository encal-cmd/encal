class Mensagem < ApplicationRecord
  belongs_to :user
  belongs_to :grupo
  has_many :download_mensagens

  # Paperclip
  has_attached_file :imagem, :styles => { :original => "900x900>" }
  do_not_validate_attachment_file_type :imagem

  after_save :mandar_fb
  after_save :mandar_notificacao
  before_save :fix_mimetype

  # Atualizacao de foto motorista
  def update_imagem(foto_64)
    foto_64 = "data:image/jpeg;base64,#{foto_64}"
    if foto_64 != "" && foto_64 != nil
      base_64_encoded_data = foto_64
      string_img = Base64.decode64(base_64_encoded_data['data:image/png;base64,'.length .. -1])
      File.open("#{Rails.root}/tmp/motorista2.jpg", "wb") do |file| 
        file.write(string_img)
        file.size
        self.imagem = file
      end
    end
  end

  def mandar_fb
    puts "


        ------------
        ------------
        ------------
        ------------

        entroo!


    "
    if self.tipo == "imagem"
      envio = HTTParty.post("https://encal-a4d41.firebaseio.com/chat.json", 
      { body: { 
          grupo_id: self.grupo_id,
          user_id: self.user_id,
          user_name: self.user.nome,
          msg: "",
          url: self.imagem.url,
          tipo: self.tipo,
          extensao: self.anexo_extensao,
          mimetype: self.imagem_content_type,
          anexonome: self.imagem_file_name,
          idmsg: self.id
        }.to_json, timeout: 600})
    
    elsif self.tipo == "anexo" && self.imagem_file_name.present?
      envio = HTTParty.post("https://encal-a4d41.firebaseio.com/chat.json", 
      { body: { 
          grupo_id: self.grupo_id,
          user_id: self.user_id,
          user_name: self.user.nome,
          msg: "",
          url: self.imagem.url,
          tipo: self.tipo,
          extensao: self.anexo_extensao,
          mimetype: self.imagem_content_type,
          anexonome: self.imagem_file_name,
          idmsg: self.id
        }.to_json, timeout: 600})

    end
  end

  def mandar_notificacao

    url = 'https://onesignal.com/api/v1/notifications';

    nome_usu = self.user.nome
    index_nome_usu = self.user.nome.index(" ")
    if index_nome_usu.present?
      nome_usu = nome_usu[0..index_nome_usu-1]
    end

    if self.tipo == "msg"
      content = "#{nome_usu}: #{self.msg}"
    elsif self.tipo == "imagem"
      content = "#{nome_usu}: Imagem"
    end

    envio = HTTParty.post(url, { 
      body: {
          "app_id" => "da5bb7a2-00f8-4809-90b0-525a4b5143f2", 
          "headings" => {"en" => self.grupo.nome},
          "contents" => {"en" => content},
          "data" => {"tipo" => "grupoMsg", "grupo_id" => self.grupo_id, "user_id" => self.user_id},
          "include_player_ids" => self.grupo.integrantes_onesignal_ids
      }.as_json.to_json,
      headers: { 'Content-Type' => 'application/json;charset=utf-8' }, timeout: 1000
    })

  end


  def self.mandar_notificacao_teste

    url = 'https://onesignal.com/api/v1/notifications';

    envio = HTTParty.post(url, {
      body: {
          "app_id" => "da5bb7a2-00f8-4809-90b0-525a4b5143f2", 
          "headings" => {"en" => "Teste"},
          "contents" => {"en" => "ooaa"},
          "android_group" => "grupo",
          "data" => {"grupo_id" => self.grupo_id, "user_id" => self.user_id},
          "include_player_ids" => ["309c764d-4be2-4622-b38b-51e7a7d1c53f"]
      }.as_json.to_json,
      headers: { 'Content-Type' => 'application/json;charset=utf-8' }, timeout: 1000
    })

  end

  def anexo_extensao
    return nil if !self.imagem_file_name
    indponto = self.imagem_file_name.index(".")
    return self.imagem_file_name[indponto+1..self.imagem_file_name.size]
  end

  def self.anexo_extensao_in(imagem_fn)
    return "" if !imagem_fn.present?
    indponto = imagem_fn.index(".")
    return imagem_fn[indponto+1..imagem_fn.size]
  end

  def self.list_img_url(imagem_fn, msg_id)
    return "" if !imagem_fn.present?
    return Mensagem.find(msg_id).imagem.url
  end

  def self.listar_mensagens(params)
    sql = %Q{
      SELECT users.id as user_id, users.nome as user_nome, mensagens.grupo_id, mensagens.created_at, mensagens.msg, mensagens.tipo,
      mensagens.imagem_file_name, mensagens.id as msg_id, mensagens.imagem_content_type, download_mensagens.url as down_url
      FROM mensagens
      LEFT JOIN users on users.id = mensagens.user_id
      LEFT JOIN download_mensagens on download_mensagens.mensagem_id = mensagens.id AND download_mensagens.onesignal = '#{params[:onesigId]}'
      WHERE mensagens.grupo_id = #{params[:grupo_id]}
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
        dado["imagem_content_type"]
      ]
    end

    puts "-- mensagens"
    puts msgs.inspect

    msgs_data = msgs.group_by { |d| d[7] }

    msg_data = []

    msgs_data.each do |data, msgs_dia|

      msg_data << [
        '',
        '',
        '',
        '',
        '',
        '',
        "data",
        data,
        '',
        '',
        '',
        '',
        ''
      ]

      msg_data += msgs_dia

    end

    puts '-- msg data'
    puts msg_data.inspect

    return msg_data
  end

  def fix_mimetype
    self.imagem_content_type = "application/vnd.ms-excel" if self.anexo_extensao == "xlsx"
    self.imagem_content_type = "application/vnd.ms-excel" if self.anexo_extensao == "xls"
    self.imagem_content_type = "application/msword" if self.anexo_extensao == "doc"
  end



end
