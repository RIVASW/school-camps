# frozen_string_literal: true

class V1::CampsController < V1::ApiBase
  ERROR_USER_IS_BOT = 'Sorry mate but reCaptcha thinks you are a bot:('
  BOT_THRESHOLD = 0.5

  include Rails.application.routes.url_helpers

  before_action :set_camp, only: %i[show update destroy avatar]
  before_action :authenticate_request, only: %i[update destroy]

  attr_reader :camp

  def index
    scope = if params[:confirmed]
              Camp.where(confirmed: params[:confirmed])
            else
              Camp.all
            end

    camps = scope.map do |camp|
      {
        id: camp.id,
        name: camp.name,
        location: camp.location,
        avatar: camp.avatar.attached? && polymorphic_url(camp.avatar)
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
    render(create_camp)
  end

  def update
    camp.update!(camp_params[:camp])
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

  def create_camp
    if current_user
      new_camp_json(new_camp_params: camp_params[:camp])
    else
      create_unconfirmed_camp
    end
  end

  def create_unconfirmed_camp
    command = CheckRecaptcha.call(camp_params[:captcha_token])

    if command.success? && not_a_bot?(recaptcha_result: command.result)
      new_camp_json(new_camp_params: camp_params[:camp].except(:confirmed))
    elsif command.success?
      { json: { errror: ERROR_USER_IS_BOT }, status: 401 }
    else
      { json: { errror: command.errors.full_messages }, status: 503 }
    end
  end

  def not_a_bot?(recaptcha_result:)
    recaptcha_result[:success] && recaptcha_result[:score] > BOT_THRESHOLD
  end

  def new_camp_json(new_camp_params:)
    { json: Camp.create!(new_camp_params) }
  end

  def set_camp
    @camp = Camp.find(params[:id])
  end

  def camp_params
    params.permit(
      :captcha_token,
      camp: %i[name location price contacts description avatar confirmed format]
    )
  end
end
