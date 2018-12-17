class CreateInfluences < ActiveRecord::Migration[5.1]
  def change
    create_table :influences do |t|
      t.belongs_to :influencer, null: false
      t.belongs_to :influencee, null: false

      t.timestamps
    end

    add_index :influences, [:influencer_id, :influencee_id]
  end
end
