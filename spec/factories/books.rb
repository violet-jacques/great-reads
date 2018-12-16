FactoryBot.define do
  factory :book do
    sequence(:title) { |n| "Book Title #{n}" }
    description { "This is a book description" }
  end
end
