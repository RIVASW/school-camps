# frozen_string_literal: true

class V1::CampsController < ApplicationController
  CAMPS_LIST = [
      {
        id: 1,
        name: 'PCYC',
        location: 'North Sydney',
        price: 60,
        contacts: "0495876398",
        image: 'http:/...jpg',
        description: 'PCYC sport camp in North Sydney and other areas of Sydney'
      },
      {
        id: 2,
        name: 'Big Blue Camp',
        location: 'North Sydney',
        price: 120,
        contacts: "0495876584",
        image: 'http:/...jpg',
        description: 'Big Blue camp with different activities including tennis, swimming, soccer'
      },
      {
        id: 3,
        name: 'Tennis camp',
        location: 'Cammerey',
        price: 85,
        contacts: "0495556584",
        image: 'http:/...jpg',
        description: 'Cammerey tennis camp for kids'
      },
      {
        id: 4,
        name: 'Leasure center camp',
        location: 'North Sydney',
        price: 70,
        contacts: "0495123584",
        image: 'http:/...jpg',
        description: 'Holidays activities in North Sydney leasure center'
      },
      {
        id: 5,
        name: 'Bricks for kids',
        location: 'North Sydney',
        price: 90,
        contacts: "0495858784",
        image: 'http:/...jpg',
        description: 'Bricks for kids Lego activities for kids during school holidays'
      }
    ]
  def index
    render(json: CAMPS_LIST.to_json)
  end

  def show
    the_camp = CAMPS_LIST.detect { |camp| camp[:id] == params[:id].to_i }
    render(json: the_camp.to_json)
  end
end
