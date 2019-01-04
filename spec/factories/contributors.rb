FactoryBot.define do
  factory :contributor do
    first_name { "Jane" }
    last_name { "Contributor" }
    birth_place { "Manhattan, NY, United States" }
    born_at { Date.parse("1985/01/01") }
    description { "This is a contributor description" }
  end
end
