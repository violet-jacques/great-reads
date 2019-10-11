class Book < ApplicationRecord
  include PgSearch::Model

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
    :general_search,
    against: %i[title],
    associated_against: {
      contributors: %i[first_name last_name],
      genres: %i[name]
    },
    using: { tsearch: { prefix: true } }
  )

  pg_search_scope(
    :title_search,
    against: %i[title],
    using: { tsearch: { prefix: true } }
  )

  pg_search_scope(
    :author_search,
    associated_against: {
      contributors: %i[first_name last_name],
    },
    using: { tsearch: { prefix: true } }
  )

  pg_search_scope(
    :genre_search,
    associated_against: {
      genres: %i[name]
    },
    using: { tsearch: { prefix: true } }
  )

  def self.search(query:, scope:)
    BookSearchGenerator.generate(query, scope)
  end
end
