FactoryBot.define do
  factory :genre do
    sequence(:name) { |n| "Genre #{n}" }
    description { "This is a genre description" }
  end
end
