class GenreCategorization < ApplicationRecord
  validates :book_id, presence: true
  validates :genre_id, presence: true

  belongs_to :book
  belongs_to :genre
end
