class BookSearchGenerator
  AUTHOR = "author".freeze
  DEFAULT_SCOPE = "all".freeze
  GENRE = "genre".freeze
  TITLE = "title".freeze

  def self.generate(query, scope)
    new(query, scope).generate
  end

  def initialize(query, scope)
    @query = query
    @scope = scope || DEFAULT_SCOPE
  end

  def generate
    case scope
    when AUTHOR
      Book.author_search(query)
    when GENRE
      Book.genre_search(query)
    when TITLE
      Book.title_search(query)
    when DEFAULT_SCOPE
      Book.general_search(query)
    end
  end

  private

  attr_reader :query, :scope
end
