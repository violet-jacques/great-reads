require "rails_helper"

module SearchSerializers
  RSpec.describe Book do
    describe "serialize" do
      let(:book) do
        create(
          :book,
          title: "Yo",
          variants: create_list(:variant, 2),
        )
      end
      let(:author) { create(:author) }
      let!(:author_book) do
        create(:author_book, book: book, author: author)
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

      subject(:serializer) { SearchSerializers::Book.new(book) }
      subject(:serialized_book) { serializer.serializable_hash }


      it "returns a serialized version of the book" do
        expect(serialized_book).to eq(
          title: "Yo",
          authors: [
            {
              first_name: "Jane",
              last_name: "Author",
            },
          ],
          variant_count: 2,
          average_rating: 3.5,
          rating_count: 10,
        )
      end
    end
  end
end
