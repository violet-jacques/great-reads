require 'rails_helper'

RSpec.describe Book, type: :model do
  describe "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
  end

  describe "associations" do
    it { should have_many(:variants) }
    it { should have_many(:genre_categorizations) }
    it { should have_many(:genres).through(:genre_categorizations) }
    it { should have_many(:author_books) }
    it { should have_many(:authors).through(:author_books) }
    it { should have_many(:user_books) }
    it { should have_many(:users).through(:user_books) }
  end

  describe "scopes" do
    describe ".book_search" do
      let(:search_term) { nil }
      let(:matching_book) do
        create(
          :book,
          title: "Sup Dog",
          variants: create_list(:variant, 2),
        )
      end
      let(:matching_genre) { create(:genre, name: "Fiction") }
      let!(:matching_genre_categorization) do
        create(:genre_categorization, book: matching_book, genre: matching_genre)
      end
      let(:matching_author) { create(:author) }
      let!(:matching_author_book) do
        create(:author_book, book: matching_book, author: matching_author)
      end
      let(:non_matching_book) { create(:book, title: "Cat") }
      let(:non_matching_genre) { create(:genre, name: "Horror") }
      let!(:non_matching_genre_categorization) do
        create(:genre_categorization, book: matching_book, genre: non_matching_genre)
      end
      let(:non_matching_author) { create(:author, first_name: "John", last_name: "Smith") }
      let!(:non_matching_author_book) do
        create(:author_book, book: non_matching_book, author: non_matching_author)
      end

      context "searching by title" do
        let(:search_term) { "Dog" }

        it "returns all books with title dog" do
          expect(Book.book_search(search_term))
            .to contain_exactly(matching_book)
        end
      end

      context "searching by author first name" do
        let(:search_term) { "Jane" }

        it "returns all books with author named Jane" do
          expect(Book.book_search(search_term))
            .to contain_exactly(matching_book)
        end
      end

      context "searching by author last name" do
        let(:search_term) { "Author" }

        it "returns all books with author named Jane" do
          expect(Book.book_search(search_term))
            .to contain_exactly(matching_book)
        end
      end

      context "searching by genre" do
        let(:search_term) { "Fiction" }

        it "returns all books with author named Jane" do
          expect(Book.book_search(search_term))
            .to contain_exactly(matching_book)
        end
      end
    end
  end

  describe "#average_rating" do
    let(:users) { create_list(:user, 10) }
    let(:book) { create(:book) }
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

    it "returns the average rating" do
      expect(book.average_rating).to eq(3.5)
    end
  end

  describe "#rating_count" do
    let(:users) { create_list(:user, 10) }
    let(:book) { create(:book) }
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

    let!(:non_ratings) do
      create_list(:user, 3).map do |user|
          create(:user_book, rating: nil, book: book, user: user)
      end
    end

    it "returns the count of user_books with ratings" do
      expect(book.rating_count).to eq(10)
    end
  end
end
