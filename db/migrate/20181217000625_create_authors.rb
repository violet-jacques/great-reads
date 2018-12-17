class CreateAuthors < ActiveRecord::Migration[5.1]
  def change
    create_table :authors do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :born_at, null: false
      t.date :died_at
      t.string :birth_place, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :authors, :born_at
    add_index :authors, :died_at
    add_index :authors, :first_name
    add_index :authors, :last_name
  end
end
