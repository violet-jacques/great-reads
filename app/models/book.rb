class Book < ApplicationRecord
  include PgSearch

  validates :title, presence: true
  validates :description, presence: true

  has_many :variants, dependent: :destroy
  has_many :genre_categorizations, dependent: :destroy
  has_many :genres, through: :genre_categorizations
  has_many :contributions, as: :contributable, dependent: :destroy
  has_many :contributors, through: :contributions

  has_many :user_books, dependent: :destroy
  has_many :users, through: :user_books

  pg_search_scope(
    :book_search,
    against: %i[title],
    associated_against: {
      contributors: %i[first_name last_name],
      genres: %i[name]
    },
    using: { tsearch: { prefix: true } }
  )

  def average_rating
    ratings.average(:rating).to_f
  end

  def rating_count
    ratings.count
  end

  private

  def ratings
    @ratings ||= user_books.where.not(rating: nil)
  end
end
