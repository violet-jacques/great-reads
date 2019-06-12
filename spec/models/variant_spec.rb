require 'rails_helper'

RSpec.describe Variant, type: :model do
  describe "validations" do
    subject { create(:variant) }

    it { should validate_presence_of(:isbn) }
    it { should validate_uniqueness_of(:isbn).case_insensitive }
    it { should validate_presence_of(:pages) }
    it { should validate_presence_of(:published_at) }
    it { should validate_presence_of(:published_by) }
    it { should validate_presence_of(:language) }
    it { should validate_presence_of(:format) }
    it { should define_enum_for(:format).with_values({
      paperback: 0,
      hardcover: 1,
    }) }
  end

  describe "associations" do
    it { should belong_to(:book) }
    it { should have_many(:contributions) }
    it { should have_many(:contributors).through(:contributions) }
  end
end
