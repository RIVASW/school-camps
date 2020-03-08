# frozen_string_literal: true

class V1::ApiBase < ApplicationController
  protect_from_forgery with: :null_session
end
