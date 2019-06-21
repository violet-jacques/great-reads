require "rails_helper"

module Api
  RSpec.describe SearchesController, :type => :request do
    describe "#index" do
      let(:query) { nil }
      let(:params) do
        {
          q: query,
        }
      end
      let(:matching_book) do
        create(
          :book,
          title: "Dog",
          variants: create_list(:variant, 2),
        )
      end
      let(:matching_genre) { create(:genre, name: "Fiction") }
      let!(:matching_genre_categorization) do
        create(
          :genre_categorization,
          book: matching_book,
          genre: matching_genre,
        )
      end
      let(:matching_contributor) { create(:contributor) }
      let!(:matching_contribution) do
        create(
          :contribution,
          contributable: matching_book,
          contributor: matching_contributor,
        )
      end
      let(:non_matching_book) { create(:book, title: "Cat") }
      let(:non_matching_genre) { create(:genre, name: "Horror") }
      let!(:non_matching_genre_categorization) do
        create(
          :genre_categorization,
          book: matching_book,
          genre: non_matching_genre,
        )
      end
      let(:non_matching_contributor) do
        create(:contributor, first_name: "John", last_name: "Smith")
      end
      let!(:non_matching_contribution) do
        create(
          :contribution,
          contributable: non_matching_book,
          contributor: non_matching_contributor,
        )
      end
      let(:users) { create_list(:user, 10) }
      let!(:some_ratings) do
        users.first(5).map do |user|
          create(:user_book, rating: 2, book: matching_book, user: user)
        end
      end
      let!(:some_more_ratings) do
        users.first(5).map do |user|
          create(:user_book, rating: 5, book: matching_book, user: user)
        end
      end

      context "searching by book title" do
        let(:query) { "Dog" }

        it "returns books matching that title" do
          get api_searches_path, :params => params

          response = JSON.parse(body)

          expect(response).to eq(
            "success" => true,
            "books" => [
              {
                "title" => "Dog",
                "contributors" => [
                  { "first_name" => "Jane", "last_name" => "Contributor" },
                ],
                "variant_count" => 2,
                "average_rating" => 3.5,
                "rating_count" => 10,
                "genres" => [
                  {
                    "id" => matching_genre.id,
                    "name" => matching_genre.name,
                  },
                  {
                    "id" => non_matching_genre.id,
                    "name" => non_matching_genre.name,
                  },
                ],
              },
            ],
          )
        end
      end

      context "searching by author first_name" do
        let(:query) { "Jane" }

        it "returns books matching that author first name" do
          get api_searches_path, :params => params

          response = JSON.parse(body)

          expect(response).to eq(
            "success" => true,
            "books" => [
              {
                "title" => "Dog",
                "contributors" => [
                  { "first_name" => "Jane", "last_name" => "Contributor" },
                ],
                "variant_count" => 2,
                "average_rating" => 3.5,
                "rating_count" => 10,
                "genres" => [
                  {
                    "id" => matching_genre.id,
                    "name" => matching_genre.name,
                  },
                  {
                    "id" => non_matching_genre.id,
                    "name" => non_matching_genre.name,
                  },
                ],
              },
            ],
          )
        end
      end

      context "searching by author last_name" do
        let(:query) { "Contributor" }

        it "returns books matching that contributor last name" do
          get api_searches_path, :params => params

          response = JSON.parse(body)

          expect(response).to eq(
            "success" => true,
            "books" => [
              {
                "title" => "Dog",
                "contributors" => [
                  { "first_name" => "Jane", "last_name" => "Contributor" },
                ],
                "variant_count" => 2,
                "average_rating" => 3.5,
                "rating_count" => 10,
                "genres" => [
                  {
                    "id" => matching_genre.id,
                    "name" => matching_genre.name,
                  },
                  {
                    "id" => non_matching_genre.id,
                    "name" => non_matching_genre.name,
                  },
                ],
              },
            ],
          )
        end
      end

      context "searching by genre" do
        let(:query) { "Fiction" }

        it "returns books matching that author first name" do
          get api_searches_path, :params => params

          response = JSON.parse(body)

          expect(response).to eq(
            "success" => true,
            "books" => [
              {
                "title" => "Dog",
                "contributors" => [
                  { "first_name" => "Jane", "last_name" => "Contributor" },
                ],
                "variant_count" => 2,
                "average_rating" => 3.5,
                "rating_count" => 10,
                "genres" => [
                  {
                    "id" => matching_genre.id,
                    "name" => matching_genre.name,
                  },
                  {
                    "id" => non_matching_genre.id,
                    "name" => non_matching_genre.name,
                  },
                ],
              },
            ],
          )
        end
      end
    end
  end
end
