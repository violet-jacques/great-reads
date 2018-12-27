class Book < ApplicationRecord
  include PgSearch

  validates :title, presence: true
  validates :description, presence: true

  has_many :variants
  has_many :genre_categorizations
  has_many :genres, through: :genre_categorizations
  has_many :author_books
  has_many :authors, through: :author_books
  has_many :user_books
  has_many :users, through: :user_books

  pg_search_scope :book_search,
    against: [:title],
    associated_against: {
      authors: [:first_name, :last_name],
      genres: [:name]
    },
    using: { tsearch: { prefix: true } }
end
