class CreateGenreCategorization < ActiveRecord::Migration[5.1]
  def change
    create_table :genre_categorizations do |t|
      t.belongs_to :book, null: false
      t.belongs_to :genre, null: false

      t.timestamps
    end

    add_index :genre_categorizations, [:book_id, :genre_id]
  end
end
