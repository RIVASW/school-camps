# frozen_string_literal: true

class V1::CampsController < V1::ApiBase
  before_action :set_camp, only: %i[show update destroy]

  attr_reader :camp

  def index
    camps = Camp.all.map { |camp| { id: camp.id, name: camp.name, location: camp.location } }
    render(json: camps)
  end

  def show
    render(json: camp)
  end

  def create
    new_camp = Camp.create!(camp_params)
    render(json: new_camp)
  end

  def update
    camp.update!(camp_params)
    head(:no_content)
  end

  def destroy
    camp.destroy!
    head(:no_content)
  end

  private

  def set_camp
    @camp = Camp.find(params[:id])
  end

  def camp_params
    params.permit(
      :name,
      :location,
      :price,
      :contacts,
      :description
    )
  end
end
