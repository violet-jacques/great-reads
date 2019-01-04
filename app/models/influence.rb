class Influence < ApplicationRecord
  validates :influencer_id, presence: true
  validates :influencee_id, presence: true

  belongs_to :influencer, class_name: "Contributor"
  belongs_to :influencee, class_name: "Contributor"
end
