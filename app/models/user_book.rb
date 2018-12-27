class UserBook < ApplicationRecord
  validates :book_id, presence: true
  validates :user_id, presence: true
  validates :favorite, inclusion: { in: [true, false] }
  validates :group, presence: true

  enum group: {
    wishlist: 0,
    reading: 1,
    read: 2,
  }

  belongs_to :book
  belongs_to :user
end
