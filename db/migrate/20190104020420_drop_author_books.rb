class DropAuthorBooks < ActiveRecord::Migration[5.1]
  def self.up
    drop_table :author_books
  end

  def self.down
    create_table :author_books do |t|
      t.belongs_to :author, null: false
      t.belongs_to :book, null: false

      t.timestamps
    end

    add_index :author_books, [:book_id, :author_id]
  end
end
