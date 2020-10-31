class Projeto < ApplicationRecord
  has_many :etapa_projetos
  after_create :criar_etapas


  def criar_etapas
    self.etapa_projetos.create(nome: "MOBILIZAÇÃO", porc: 20, status: "PENDENTE", ordem: 1)
    self.etapa_projetos.create(nome: "PRESTAÇÃO DE SERVIÇO", porc: 20, status: "PENDENTE", ordem: 2)
    self.etapa_projetos.create(nome: "CONCLUSÃO", porc: 20, status: "PENDENTE", ordem: 3)
    self.etapa_projetos.create(nome: "DESMOBILIZAÇÃO", porc: 20, status: "PENDENTE", ordem: 4)
    self.etapa_projetos.create(nome: "LIMPEZA DA ÁREA", porc: 20, status: "PENDENTE", ordem: 5)
    self.update_column(:etapa_atual, self.etapa_projetos.first.id)
  end

  def etapas
    lista = self.etapa_projetos.collect{|n| [
      n.id,
      n.nome,
      n.status,
      (n.data_inicio.strftime("%d/%m/%Y") rescue "A definir"),
      (n.data_fim.strftime("%d/%m/%Y") rescue "A definir"),
    ]}
  end
end
