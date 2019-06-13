require "rails_helper"

RSpec.describe Genre, type: :model do
  describe "validations" do
    subject { create(:genre) }
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name).case_insensitive }
    it { should validate_presence_of(:description) }
  end

  describe "associations" do
    it { should have_many(:genre_categorizations).dependent(:destroy) }
    it { should have_many(:books).through(:genre_categorizations) }
  end
end
