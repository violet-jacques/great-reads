require "rails_helper"

RSpec.describe User, type: :model do
  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
  end

  describe "associations" do
    it { should have_many(:user_books).dependent(:destroy) }
    it { should have_many(:books).through(:user_books) }
  end
end
