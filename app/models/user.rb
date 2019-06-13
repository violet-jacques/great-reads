class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_books, dependent: :destroy
  has_many :books, through: :user_books

  def to_h
    {
      id: id,
      email: email,
      first_name: first_name,
      last_name: last_name,
    }
  end
end
