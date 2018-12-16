class CreateVariants < ActiveRecord::Migration[5.1]
  def change
    create_table :variants do |t|
      t.date :published_at, null: false
      t.string :published_by, null: false
      t.string :isbn, null: false
      t.string :language, null: false
      t.integer :format, null: false
      t.integer :pages, null: false
      t.references :book, null: false
    end

    add_index :variants, :pages
    add_index :variants, :language
    add_index :variants, :published_at
    add_index :variants, :published_by
    add_index :variants, :format
    add_index :variants, :isbn, unique: true
  end
end
