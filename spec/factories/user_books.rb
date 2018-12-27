FactoryBot.define do
  factory :user_book do
    book
    user
    group { :wishlist }
    favorite { false }
  end
end
