require 'rails_helper'

RSpec.describe UserBook, type: :model do
  describe "validations" do
    it { should validate_presence_of(:book_id) }
    it { should validate_presence_of(:user_id) }
    it { should validate_inclusion_of(:favorite).in_array([true, false]) }
    it { should validate_presence_of(:group) }
    it do
      should define_enum_for(:group).with({
        wishlist: 0,
        reading: 1,
        read: 2,
      })
    end
  end

  describe "associations" do
    it { should belong_to(:book) }
    it { should belong_to(:user) }
  end
end
