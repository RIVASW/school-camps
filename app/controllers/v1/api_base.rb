# frozen_string_literal: true

class V1::ApiBase < ApplicationController
  NOT_AUTHORIZED = 'Not Authorized'

  protect_from_forgery with: :null_session

  private

  def authenticate_request
    render(json: { error: NOT_AUTHORIZED }, status: 401) unless current_user
  end

  def current_user
    @current_user ||= AuthorizeApiRequest.call(request.headers).result
  end
end
