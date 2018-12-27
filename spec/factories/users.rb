FactoryBot.define do
  factory :user do
    first_name { "User" }
    last_name { "Name" }
    sequence(:email) { |n| "test#{n}@example.com" }
    password { "password" }
  end
end
