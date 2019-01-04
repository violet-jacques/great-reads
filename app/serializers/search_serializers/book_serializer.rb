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
        contributors: serialized_contributors,
        variant_count: variants.count,
        average_rating: average_rating,
        rating_count: rating_count,
      }
    end

    private

    attr_reader :book
    delegate :average_rating,
      :contributors,
      :rating_count,
      :title,
      :variants, to: :book

    def serialized_contributors
      contributors.map do |contributor|
        {
          first_name: contributor.first_name,
          last_name: contributor.last_name,
        }
      end
    end
  end
end
