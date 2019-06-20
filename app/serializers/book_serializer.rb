class BookSerializer
  def self.serialize(book)
    new(book).serialize
  end

  def initialize(book)
    @book = book
  end

  def serialize
    {
      title: book.title,
      contributors: serialized_contributors,
      variant_count: book.variants.count,
      average_rating: average_rating,
      rating_count: ratings.count,
    }
  end

  private

  attr_reader :book

  def serialized_contributors
    book.contributors.map do |contributor|
      {
        first_name: contributor.first_name,
        last_name: contributor.last_name,
      }
    end
  end

  def average_rating
    ratings.average(:rating).to_f
  end

  def ratings
    @ratings ||= book.user_books.where.not(rating: nil)
  end
end
