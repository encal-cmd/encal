class ChangePagToAprovacao < ActiveRecord::Migration[5.2]
  def change
    change_column :aprovacoes, :pagamentoComNota, :string
  end
end
