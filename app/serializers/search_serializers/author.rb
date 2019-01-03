module SearchSerializers
  class Author < ActiveModel::Serializer
    attributes :first_name, :last_name
  end
end
