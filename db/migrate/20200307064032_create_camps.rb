# frozen_string_literal: true

class CreateCamps < ActiveRecord::Migration[6.0]
  def up
    create_table :camps do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.float :price
      t.string :contacts
      t.text :description, null: false
      t.boolean :confirmed, default: false
    end
  end

  def down
    drop_table :camps
  end
end
