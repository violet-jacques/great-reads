class Author < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :born_at, presence: true
  validates :birth_place, presence: true
  validates :description, presence: true

  has_many :author_books
  has_many :books, through: :author_books
end
