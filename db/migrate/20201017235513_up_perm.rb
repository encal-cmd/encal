class UpPerm < ActiveRecord::Migration[5.2]
  def change
  	Permissao.create(nome: "Ver Grupo", codigo: "ver_grupo")
  	Permissao.create(nome: "Criar Grupo", codigo: "criar_grupo")
  	Permissao.create(nome: "Ver Usuário", codigo: "ver_usuario")
  	Permissao.create(nome: "Criar Usuário", codigo: "criar_usuario")
  	Permissao.create(nome: "Editar Usuário", codigo: "editar_usuario")
  	Permissao.create(nome: "Resetar Usuário", codigo: "resetar_usuario")
  	Permissao.create(nome: "Ver Aprovação", codigo: "ver_aprovacao")
  	Permissao.create(nome: "Criar Aprovação", codigo: "criar_aprovacao")
  	Permissao.create(nome: "Editar Aprovação", codigo: "editar_aprovacao")
  	Permissao.create(nome: "Ver Prestadores", codigo: "ver_prestadores")
  	Permissao.create(nome: "Criar Prestador", codigo: "criar_prestadores")
  	Permissao.create(nome: "Editar Prestador", codigo: "editar_prestadores")
  	Permissao.create(nome: "Criar Tarefa", codigo: "criar_tarefa")
  	Permissao.create(nome: "Criar Projeto", codigo: "criar_projeto")
  	Permissao.create(nome: "Editar Projeto", codigo: "editar_projeto")
  	Permissao.create(nome: "Ver Projetos", codigo: "ver_projetos")
  end
end
