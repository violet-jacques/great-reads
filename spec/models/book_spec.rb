require "rails_helper"

RSpec.describe Book, type: :model do
  describe "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
  end

  describe "associations" do
    it { should have_many(:variants).dependent(:destroy) }
    it { should have_many(:genre_categorizations).dependent(:destroy) }
    it { should have_many(:genres).through(:genre_categorizations) }
    it { should have_many(:user_books).dependent(:destroy) }
    it { should have_many(:users).through(:user_books) }
    it { should have_many(:contributions).dependent(:destroy) }
    it { should have_many(:contributors).through(:contributions) }
  end

  describe "scopes" do
    describe ".general_search" do
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

      context "searching by title" do
        let(:search_term) { "Dog" }

        it "returns all books with title dog" do
          expect(Book.general_search(search_term))
            .to contain_exactly(matching_book)
        end
      end

      context "searching by contributor first name" do
        let(:search_term) { "Jane" }

        it "returns all books with contributor named Jane" do
          expect(Book.general_search(search_term))
            .to contain_exactly(matching_book)
        end
      end

      context "searching by contributor last name" do
        let(:search_term) { "Contributor" }

        it "returns all books with contributor named Contributor" do
          expect(Book.general_search(search_term))
            .to contain_exactly(matching_book)
        end
      end

      context "searching by genre" do
        let(:search_term) { "Fiction" }

        it "returns all books with the specified genre" do
          expect(Book.general_search(search_term))
            .to contain_exactly(matching_book)
        end
      end
    end

    describe ".title_search" do
      let(:search_term) { "Sup Dog" }
      let(:matching_book) do
        create(
          :book,
          title: "Sup Dog",
          variants: create_list(:variant, 2),
        )
      end
      let(:non_matching_book) { create(:book, title: "Cat") }

      it "returns all books with title Sup Dog" do
        expect(Book.title_search(search_term))
          .to contain_exactly(matching_book)
      end
    end

    describe ".author_search" do
      let(:search_term) { "John Wick" }
      let(:matching_book) do
        create(
          :book,
          title: "Sup Dog",
          variants: create_list(:variant, 2),
        )
      end
      let(:matching_contributor) do
        create(:contributor, first_name: "John", last_name: "Wick")
      end
      let!(:matching_contribution) do
        create(
          :contribution,
          contributable: matching_book,
          contributor: matching_contributor,
        )
      end
      let(:non_matching_book) { create(:book, title: "Cat") }
      let(:non_matching_contributor) do
        create(:contributor, first_name: "Dom", last_name: "Kick")
      end
      let!(:non_matching_contribution) do
        create(
          :contribution,
          contributable: non_matching_book,
          contributor: non_matching_contributor,
        )
      end

      it "returns all books with title dog" do
        expect(Book.author_search(search_term))
          .to contain_exactly(matching_book)
      end
    end

    describe ".genre_search" do
      let(:search_term) { "Ancom Utopia" }
      let(:matching_book) do
        create(
          :book,
          title: "Sup Dog",
          variants: create_list(:variant, 2),
        )
      end
      let(:matching_genre) { create(:genre, name: search_term) }
      let!(:matching_genre_categorization) do
        create(
          :genre_categorization,
          book: matching_book,
          genre: matching_genre,
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

      it "returns all books with title dog" do
        expect(Book.genre_search(search_term))
          .to contain_exactly(matching_book)
      end
    end
  end
end
