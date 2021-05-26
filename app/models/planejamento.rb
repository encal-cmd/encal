class Planejamento < ApplicationRecord
    has_many :pasta_planejamentos

    def pode_editar?(user)
        return true if user.admin
        return true if !self.grupo_usu_editar_ids.present?
        self.grupo_usu_editar_ids.split("||").include?(user.id.to_s)
    end

    def pode_ver?(user)
        return true if user.admin
        return true if !self.grupo_usu_ver_ids.present?
        self.grupo_usu_ver_ids.split("||").include?(user.id.to_s)
    end
end
