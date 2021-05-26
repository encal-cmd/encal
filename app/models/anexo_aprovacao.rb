class AnexoAprovacao < ApplicationRecord
  belongs_to :aprovacao
  has_many :download_anexo_aprovacoes

  has_attached_file :anexo, :styles => { :original => "900x900>" }
  do_not_validate_attachment_file_type :anexo

  # before_save :fix_mimetype

  def self.list_img_url(imagem_fn, msg_id)
    puts "-------"
    puts imagem_fn
    puts msg_id
    return "" if !imagem_fn.present?
    return AnexoAprovacao.find(msg_id).anexo.url
  end

  def fix_mimetype
    self.imagem_content_type = "application/vnd.ms-excel" if self.anexo_extensao == "xlsx"
    self.imagem_content_type = "application/vnd.ms-excel" if self.anexo_extensao == "xls"
    self.imagem_content_type = "application/msword" if self.anexo_extensao == "doc"
  end

end
