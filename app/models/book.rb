class Book < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  has_many :variants
end
