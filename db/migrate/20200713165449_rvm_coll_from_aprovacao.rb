class RvmCollFromAprovacao < ActiveRecord::Migration[5.2]
  def change
  	remove_column :aprovacoes, :pagamentoComNota
  	remove_column :aprovacoes, :tipoPagamento
  	remove_column :aprovacoes, :favorecido
  end
end
