FactoryBot.define do
  factory :books do
    sequence(:title) { |n| "Book Title #{n}" }
    description { "This is a book description" }
  end
end
