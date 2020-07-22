class ChangeAprovacao < ActiveRecord::Migration[5.2]
  def change
  	remove_column :aprovacoes, :titulo
  	remove_column :aprovacoes, :descricao
  	add_column :aprovacoes, :empresa, :string
  	add_column :aprovacoes, :centro_custo, :string
  	add_column :aprovacoes, :solicitante, :string
  	add_column :aprovacoes, :data_solicitacao, :datetime
  	add_column :aprovacoes, :data_entrega, :datetime
  	add_column :aprovacoes, :horario, :string
  	add_column :aprovacoes, :valor, :decimal, scale: 2, precision: 10
  	add_column :aprovacoes, :pagamentoComNota, :boolean
  	add_column :aprovacoes, :favorecido, :string
  	add_column :aprovacoes, :tipoPagamento, :string
  	add_column :aprovacoes, :obsPagamento, :text
  end
end
