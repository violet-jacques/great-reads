class Contribution < ApplicationRecord
  validates :contribution_type, presence: true
  validates :contributable_type, presence: true
  validates :contributable_id, presence: true
  validates :contributor_id, presence: true

  belongs_to :contributable, polymorphic: true
  belongs_to :contributor

  enum contribution_type: {
    author: 0,
    translator: 1,
    illustrator: 2,
    foreward: 3,
    narrator: 4,
    introducer: 5,
    preface: 6,
  }
end
