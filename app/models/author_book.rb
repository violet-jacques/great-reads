class AuthorBook < ApplicationRecord
  validates :book_id, presence: true
  validates :author_id, presence: true

  belongs_to :book
  belongs_to :author
end
