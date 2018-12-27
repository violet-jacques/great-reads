require "factory_bot_rails"
require "ffaker"

if Rails.env.development?
  GenreCategorization.destroy_all
  AuthorBook.destroy_all
  Influence.destroy_all
  Variant.destroy_all
  Book.destroy_all
  Genre.destroy_all
  Author.destroy_all

  [
    "Absurdist", "Tragedy", "Science Fiction", "Fantasy",
    "Adventure", "Mystery", "Satire", "Horror", "Fiction",
  ].each do |name|
    FactoryBot.create(
      :genre,
      name: name,
      description: FFaker::Lorem.paragraph,
    )
  end

  authors = FactoryBot.create_list(
    :author,
    100,
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    born_at: FFaker::Time.between(100.years.ago, 18.years.ago),
    birth_place: FFaker::Address.city,
    description: FFaker::Lorem.paragraph,
  )

  books = FactoryBot.create_list(
    :book,
    600,
    title: FFaker::Book.title,
    description: FFaker::Book.description,
    variants: FactoryBot.create_list(
      :variant,
      rand(1..4),
      format: [:paperback, :hardcover].sample,
      pages: rand(150...600),
      published_at: FFaker::Time.datetime,
      published_by: FFaker::Company.name,
      language: FFaker::Locale.language,
    ),
  )

  authors.each do |author|
    FactoryBot.create(
      :author_book,
      book: books.sample,
      author: author,
    )
  end

  books.each do |book|
    FactoryBot.create(
      :author_book,
      book: book,
      author: authors.sample,
    )
  end

  books.each do |book|
    FactoryBot.create(
      :genre_categorization,
      book: book,
      genre: Genre.all.sample,
    )
  end

  books.sample(Book.count - 20).each do |book|
    FactoryBot.create(
      :genre_categorization,
      book: book,
      genre: Genre.all.sample,
    )
  end

  30.times do
    Influence.create(
      influencee_id: authors.sample,
      influencer_id: authors.sample,
    )
  end
end
