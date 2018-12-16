FactoryBot.define do
  factory :variant do
    published_at { Date.parse("2018/01/02") }
    published_by { "Book Publisher" }
    sequence(:isbn) { |n| "329423#{n}" }
    language { "English" }
    format { :paperback }
    pages { 311 }
    book
  end
end
