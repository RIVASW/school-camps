# frozen_string_literal: true

require 'net/http'

class CheckRecaptcha
  RECAPTCHA_URI = 'https://www.google.com/recaptcha/api/siteverify'
  RECAPTCHA_CHECK_ERROR = 'Error occured while checking reCaptcha'

  prepend SimpleCommand

  def initialize(token)
    @token = token
  end

  def call
    uri = URI(RECAPTCHA_URI)
    response = Net::HTTP.post_form(uri, secret: ENV['RECAPTCHA_SECRET'], response: token)

    if response.is_a?(Net::HTTPSuccess)
      JSON.parse(response.body).symbolize_keys
    else
      errors.add(:base, RECAPTCHA_CHECK_ERROR)
    end
  end

  private

  attr_reader :token
end
