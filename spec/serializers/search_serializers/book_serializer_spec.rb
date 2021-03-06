require "rails_helper"

RSpec.describe BookSerializer do
  describe ".serialize" do
    let(:book) do
      create(
        :book,
        title: "Dog",
        variants: create_list(:variant, 2),
      )
    end
    let(:contributor) { create(:contributor) }
    let!(:contribution) do
      create(:contribution, contributable: book, contributor: contributor)
    end
    let(:users) { create_list(:user, 10) }
    let!(:some_ratings) do
      users.first(5).map do |user|
        create(:user_book, rating: 2, book: book, user: user)
      end
    end

    let!(:some_more_ratings) do
      users.first(5).map do |user|
        create(:user_book, rating: 5, book: book, user: user)
      end
    end
    let(:genre) { FactoryBot.create(:genre, name: "sup") }
    let!(:genre_categorization) do
      FactoryBot.create(:genre_categorization, genre: genre, book: book)
    end

    subject(:serialized_book) { BookSerializer.serialize(book) }

    it "serializes the book properly" do
      expect(serialized_book).to eq(
        title: "Dog",
        contributors: [
          { first_name: "Jane", last_name: "Contributor" },
        ],
        variant_count: 2,
        average_rating: 3.5,
        rating_count: 10,
        genres: [{
          id: genre.id,
          name: genre.name,
        }],
      )
    end
  end
end
