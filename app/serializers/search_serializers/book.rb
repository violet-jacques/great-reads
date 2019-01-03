module SearchSerializers
  class Book < ActiveModel::Serializer
    attributes :title,
      :variant_count,
      :average_rating,
      :rating_count

    has_many :authors, serializer: Author

    def variant_count
      object.variants.count
    end
  end
end
