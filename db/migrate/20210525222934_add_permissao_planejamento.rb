class AddPermissaoPlanejamento < ActiveRecord::Migration[5.2]
  def change
    Permissao.create(nome: "Ver Lista Planejamento", codigo: "ver_planejamento")
    Permissao.create(nome: "Criar Planejamento", codigo: "criar_planejamento")
  end
end
