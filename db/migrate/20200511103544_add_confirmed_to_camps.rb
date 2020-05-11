# frozen_string_literal: ture

class AddConfirmedToCamps < ActiveRecord::Migration[6.0]
  def up
    add_column(:camps, :confirmed, :boolean, default: false)
  end

  def down
    column_exists?(:camps, :confirmed) && remove_column(:camps, :confirmed)
  end
end
