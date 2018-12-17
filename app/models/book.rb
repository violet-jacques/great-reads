class Book < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  has_many :variants
  has_many :genre_categorizations
  has_many :genres, through: :genre_categorizations
end
