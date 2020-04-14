# frozen_string_literal: true

class V1::CampsController < V1::ApiBase
  include Rails.application.routes.url_helpers

  before_action :set_camp, only: %i(show update destroy avatar)
  before_action :authenticate_request, only: %i(create update destroy)

  attr_reader :camp

  def index
    camps = Camp.all.map do |camp|
      {
        id: camp.id,
        name: camp.name,
        location: camp.location,
        avatar: camp.avatar.attached? && polymorphic_url(camp.avatar),
      }
    end
    render(json: camps)
  end

  def show
    camp_data = camp.attributes
    camp_data = camp_data.merge(avatar: camp.avatar.attached? && polymorphic_url(camp.avatar))
    render(json: camp_data)
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

  def avatar
    if camp&.avatar&.attached?
      redirect_to(rails_blob_url(camp.avatar))
    else
      head(:not_found)
    end
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
      :description,
      :avatar,
    )
  end
end
