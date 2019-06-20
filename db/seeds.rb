require "factory_bot_rails"
require "ffaker"

if Rails.env.development?
  GenreCategorization.destroy_all
  Contribution.destroy_all
  Influence.destroy_all
  Variant.destroy_all
  Book.destroy_all
  Genre.destroy_all
  Contributor.destroy_all
  User.destroy_all

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

  contributors = Array.new(100) do
    FactoryBot.create(
      :contributor,
      first_name: FFaker::Name.unique.first_name,
      last_name: FFaker::Name.unique.last_name,
      born_at: FFaker::Time.between(100.years.ago, 18.years.ago),
      birth_place: FFaker::Address.unique.city,
      description: FFaker::Lorem.paragraph,
    )
  end

  books = Array.new(600) do
    FactoryBot.create(
      :book,
      title: FFaker::Book.unique.title,
      description: FFaker::Book.description,
      variants: FactoryBot.create_list(
        :variant,
        rand(1..4),
        format: [:paperback, :hardcover].sample,
        pages: rand(150...600),
        published_at: FFaker::Time.datetime,
        published_by: FFaker::Company.unique.name,
        language: FFaker::Locale.language,
      ),
    )
  end

  contributors.each do |contributor|
    FactoryBot.create(
      :contribution,
      contributable: books.sample,
      contributor: contributor,
    )
  end

  books.each do |book|
    FactoryBot.create(
      :contribution,
      contributable: book,
      contributor: contributors.sample,
      contribution_type: Contribution.contribution_types.keys.sample,
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
      influencee_id: contributors.sample,
      influencer_id: contributors.sample,
    )
  end

  users = Array.new(100) do
    FactoryBot.create(
      :user,
      first_name: FFaker::Name.first_name,
      last_name: FFaker::Name.last_name,
      email: FFaker::Internet.unique.email,
      password: FFaker::Internet.unique.password,
    )
  end

  10_000.times do
    rating = rand * (5 - 1) + 1

    FactoryBot.create(
      :user_book,
      rating: rating,
      favorite: rating > 3,
      group: :read,
      user: users.sample,
      book: books.sample,
    )
  end
end
