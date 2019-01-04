class Contributor < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :born_at, presence: true
  validates :birth_place, presence: true
  validates :description, presence: true

  has_many :contributions

  has_many :influencer_influences, foreign_key: :influencee_id, class_name: "Influence"
  has_many :influences, through: :influencer_influences, source: :influencer

  has_many :influencee_influences, foreign_key: :influencer_id, class_name: "Influence"
  has_many :influencees, through: :influencee_influences, source: :influencee
end
