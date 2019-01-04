module Api
  class SearchesController < ApplicationController
    def index
      render json: { success: true, books: serialized_books }
    end

    private

    def serialized_books
      books.map do |book|
        SearchSerializers::BookSerializer.serialize(book)
      end
    end

    def books
      Book.book_search(search_params[:query])
    end

    def search_params
      params.require(:search).permit(:query)
    end
  end
end
