FactoryBot.define do
  factory :author do
    first_name { "Jane" }
    last_name { "Author" }
    birth_place { "Manhattan, NY, United States" }
    born_at { Date.parse("1985/01/01") }
    description { "This is an author description" }
  end
end
