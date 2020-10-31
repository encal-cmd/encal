class EtapaProjeto < ApplicationRecord
  belongs_to :projeto

  def finalizar
    self.update_attribute(:status, "FINALIZADO")
    prox_etapa = self.projeto.etapa_projetos.where(ordem: (self.ordem + 1)).last
    if prox_etapa
      self.projeto.update_attribute(:etapa_atual, prox_etapa.id)
    else
      self.projeto.update_attribute(:status, "FINALIZADO")
    end
  end
end
