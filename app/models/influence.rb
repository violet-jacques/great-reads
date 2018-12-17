class Influence < ApplicationRecord
  validates :influencer_id, presence: true
  validates :influencee_id, presence: true

  belongs_to :influencer, class_name: "Author"
  belongs_to :influencee, class_name: "Author"
end
