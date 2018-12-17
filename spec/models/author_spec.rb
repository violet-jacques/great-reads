require 'rails_helper'

RSpec.describe Author, type: :model do
  describe "validations" do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:born_at) }
    it { should validate_presence_of(:birth_place) }
    it { should validate_presence_of(:description) }
  end

  describe "associations" do
    it { should have_many(:author_books) }
    it { should have_many(:books).through(:author_books) }
  end
end
