class AddPerms24042021 < ActiveRecord::Migration[5.2]
  def change
    Permissao.create(nome: "Ver Tarefas", codigo: "ver_tarefas")
    Permissao.create(nome: "Ver Grupo de Usuários", codigo: "ver_grupo_usuarios")
    Permissao.create(nome: "Editar Grupo de Usuários", codigo: "editar_grupo_usuarios")
    Permissao.create(nome: "Criar Grupo de Usuários", codigo: "criar_grupo_usuarios")
  end
end
