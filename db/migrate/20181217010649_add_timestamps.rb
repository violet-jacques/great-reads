class AddTimestamps < ActiveRecord::Migration[5.1]
  def change
    add_column :genres, :created_at, :datetime, null: false
    add_column :genres, :updated_at, :datetime, null: false
    add_column :books, :created_at, :datetime, null: false
    add_column :books, :updated_at, :datetime, null: false
    add_column :variants, :created_at, :datetime, null: false
    add_column :variants, :updated_at, :datetime, null: false
  end
end
