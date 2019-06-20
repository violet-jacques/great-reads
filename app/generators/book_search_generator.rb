class BookSearchGenerator
  DEFAULT_SCOPE = "all".freeze

  def self.generate(query:, scope:)
    new(query, scope).generate
  end

  def initialize(query, scope)
    @query = query
    @scope = scope || DEFAULT_SCOPE
  end

  def generate
    case @scope
    when "title"
      Book.title_search(@query)
    when "genre"
      Book.genre_search(@query)
    when "author"
      Book.author_search(@query)
    when DEFAULT_SCOPE
      Book.general_search(@query)
    end
  end
end
