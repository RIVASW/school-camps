# frozen_string_literal: true

class Camp < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
end
