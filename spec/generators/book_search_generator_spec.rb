require "rails_helper"

RSpec.describe BookSearchGenerator do
  describe ".generate" do
    let(:scope) { nil }
    let(:query) { "hey" }
    subject(:book_search) do
      described_class.generate(query, scope)
    end

    before do
      allow(Book).to receive(:general_search)
      allow(Book).to receive(:title_search)
      allow(Book).to receive(:author_search)
      allow(Book).to receive(:genre_search)

      book_search
    end

    context "scope is 'all'" do
      let(:scope) { "all" }

      it "performs a general search" do
        expect(Book).to have_received(:general_search).with(query)
        expect(Book).not_to have_received(:title_search).with(query)
        expect(Book).not_to have_received(:author_search).with(query)
        expect(Book).not_to have_received(:genre_search).with(query)
      end
    end

    context "scope is 'title'" do
      let(:scope) { "title" }

      it "performs a title search" do
        expect(Book).to have_received(:title_search).with(query)
        expect(Book).not_to have_received(:general_search).with(query)
        expect(Book).not_to have_received(:author_search).with(query)
        expect(Book).not_to have_received(:genre_search).with(query)
      end
    end

    context "scope is 'genre'" do
      let(:scope) { "genre" }

      it "performs a genre search" do
        expect(Book).to have_received(:genre_search).with(query)
        expect(Book).not_to have_received(:title_search).with(query)
        expect(Book).not_to have_received(:author_search).with(query)
        expect(Book).not_to have_received(:general_search).with(query)
      end
    end

    context "scope is 'author'" do
      let(:scope) { "author" }

      it "performs an author search" do
        expect(Book).to have_received(:author_search).with(query)
        expect(Book).not_to have_received(:title_search).with(query)
        expect(Book).not_to have_received(:general_search).with(query)
        expect(Book).not_to have_received(:genre_search).with(query)
      end
    end

    context "no scope provided" do
      let(:scope) { nil }

      it "performs a general search" do
        expect(Book).to have_received(:general_search).with(query)
        expect(Book).not_to have_received(:title_search).with(query)
        expect(Book).not_to have_received(:author_search).with(query)
        expect(Book).not_to have_received(:genre_search).with(query)
      end
    end
  end
end
