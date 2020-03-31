# frozen_string_literal: true

class Camp < ApplicationRecord
  has_one_attached :avatar

  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
end
