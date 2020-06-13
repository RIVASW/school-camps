# frozen_string_literal: true

User.create(
  first_name: ENV['ADMIN_FIRST_NAME'],
  second_name: ENV['ADMIN_SECOND_NAME'],
  email: ENV['ADMIN_EMAIL'],
  password: ENV['ADMIN_PASSWORD'],
  password_confirmation: ENV['ADMIN_PASSWORD']
)
