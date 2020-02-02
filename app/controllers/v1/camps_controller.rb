# frozen_string_literal: true

class V1::CampsController < ApplicationController
  def index
    render(json: [{
      name: 'summer camp',
      time: 'whole summer from 8am to 7pm'
    }].to_json)
  end
end
