class CreateUserBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :user_books do |t|
      t.belongs_to :book, null: false
      t.belongs_to :user, null: false
      t.integer :rating
      t.integer :group, null: false
      t.boolean :favorite, null: false, default: false

      t.timestamps
    end

    add_index :user_books, [:book_id, :user_id]
    add_index :user_books, :group
    add_index :user_books, :favorite
  end
end
