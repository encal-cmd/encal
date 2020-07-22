class AddPrestadorToAprovacao < ActiveRecord::Migration[5.2]
  def change
    add_reference :aprovacoes, :prestador, index: true
  end
end
