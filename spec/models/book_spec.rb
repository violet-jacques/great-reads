require 'rails_helper'

RSpec.describe Book, type: :model do
  describe "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
  end

  describe "associations" do
    it { should have_many(:variants) }
    it { should have_many(:genre_categorizations) }
    it { should have_many(:genres).through(:genre_categorizations) }
    it { should have_many(:author_books) }
    it { should have_many(:authors).through(:author_books) }
  end
end
