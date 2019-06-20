module Api
  class SearchesController < ApplicationController
    def index
      render json: { success: true, books: serialized_books }
    end

    private

    def serialized_books
      books.map do |book|
        BookSerializer.serialize(book)
      end
    end

    def books
      BookSearchGenerator.generate(
        query: params[:q],
        scope: params[:scope],
      )
    end
  end
end
