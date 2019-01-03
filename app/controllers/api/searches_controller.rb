module Api
  class SearchesController < ApplicationController
    def index
      render json: { success: true, books: books }
    end

    private

    def books
      Book
        .includes(:authors)
        .book_search(search_params[:query])
        .map { |book| to_h(book) }
    end

    def search_params
      params.require(:search).permit(
        :query,
      )
    end

    def to_h(book)
      {
        title: book.title,
        authors: book.authors.map do |author|
          {
            first_name: author.first_name,
            last_name: author.last_name,
          }
        end,
        variant_count: book.variants.count,
        average_rating: book.average_rating,
        rating_count: book.rating_count,
      }
    end
  end
end
