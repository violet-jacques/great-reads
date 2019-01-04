class CreateContributions < ActiveRecord::Migration[5.1]
  def change
    create_table :contributions do |t|
      t.integer  :contribution_type, null: false
      t.integer :contributable_id, null: false
      t.string  :contributable_type, null: false
      t.belongs_to :contributor, null: false

      t.timestamps
    end

    add_index :contributions, :contribution_type
    add_index :contributions, :contributable_type
    add_index :contributions, [:contributable_type, :contributable_id]
  end
end
