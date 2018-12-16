class CreateGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :genres do |t|
      t.string :name, presence: true
      t.string :description, presence: true
    end

    add_index :genres, :name, unique: true
  end
end
