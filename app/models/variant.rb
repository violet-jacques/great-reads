class Variant < ApplicationRecord
  validates :isbn, presence: true, uniqueness: true
  validates :pages, presence: true
  validates :format, presence: true
  validates :language, presence: true
  validates :published_at, presence: true
  validates :published_by, presence: true

  enum format: {
    paperback: 0,
    hardcover: 1,
  }

  belongs_to :book

  has_many :contributions, as: :contributable, dependent: :destroy
  has_many :contributors, through: :contributions
end
