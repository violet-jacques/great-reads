FactoryBot.define do
  factory :user do
    first_name { "User" }
    last_name { "Name" }
    email { "test@example.com" }
    password { "password" }
  end
end
