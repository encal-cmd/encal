class Mensagem < ApplicationRecord
  belongs_to :user
  belongs_to :grupo
end
