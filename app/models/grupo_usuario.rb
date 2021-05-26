class GrupoUsuario < ApplicationRecord

  def tem_permissao(permissao)
    perms_ids = self.permissao_ids.split("||").map{|n| n.to_i}
    perms = Permissao.where(id: perms_ids).map(&:codigo)
    return perms.include?(permissao)
  end
  
end
