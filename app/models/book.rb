class Book < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  has_many :variants
  has_many :genre_categorizations
  has_many :genres, through: :genre_categorizations
  has_many :author_books
  has_many :authors, through: :author_books
  has_many :user_books
  has_many :users, through: :user_books
end
