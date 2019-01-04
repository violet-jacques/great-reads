module SearchSerializers
  class BookSerializer
    def self.serialize(book)
      new(book).serialize
    end

    def initialize(book)
      @book = book
    end

    def serialize
      {
        title: title,
        authors: serialized_authors,
        variant_count: variants.count,
        average_rating: average_rating,
        rating_count: rating_count,
      }
    end

    private

    attr_reader :book
    delegate :average_rating,
      :authors,
      :rating_count,
      :title,
      :variants, to: :book

    def serialized_authors
      authors.map do |author|
        {
          first_name: author.first_name,
          last_name: author.last_name,
        }
      end
    end
  end
end
