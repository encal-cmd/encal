class GruposController < ApplicationController
  def index
  end

  def show
  	@grupo = Grupo.find(params[:id])

  	@imagens = []
    @grupo.mensagens.where(tipo: "imagem").each do |m|
      @imagens.push(m.imagem.url)
    end

  end
end
