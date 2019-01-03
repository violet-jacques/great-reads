require "rails_helper"

module SearchSerializers
  RSpec.describe Author do
    let(:author) { create(:author) }
    let(:serializer) { SearchSerializers::Author.new(author) }

    subject(:serialized_author) { serializer.serializable_hash }

    it "return hash of first and last name" do
      expect(serialized_author).to eq(
        first_name: author.first_name,
        last_name: author.last_name,
      )
    end
  end
end
