class Mensagem < ApplicationRecord
  belongs_to :user
  belongs_to :grupo

  # Paperclip
  has_attached_file :imagem, :styles => { :original => "900x900>" }
  do_not_validate_attachment_file_type :imagem

  after_save :mandar_fb
  after_save :mandar_notificacao

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
    if self.tipo == "imagem"
      envio = HTTParty.post("https://encal-a4d41.firebaseio.com/chat.json", 
      { body: { 
          grupo_id: self.grupo_id,
          user_id: self.user_id,
          user_name: self.user.nome,
          msg: "",
          url: self.imagem.url,
          tipo: self.tipo
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


    envio = HTTParty.post(url, { 
      body: {
          "app_id" => "da5bb7a2-00f8-4809-90b0-525a4b5143f2", 
          "headings" => {"en" => self.grupo.nome},
          "contents" => {"en" => "#{nome_usu}: #{self.msg}"},
          "data" => {"grupo_id" => self.grupo_id, "user_id" => self.user_id},
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

end
