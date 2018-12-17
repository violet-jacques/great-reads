class CreateAuthorBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :author_books do |t|
      t.belongs_to :author, null: false
      t.belongs_to :book, null: false

      t.timestamps
    end

    add_index :author_books, [:book_id, :author_id]
  end
end
