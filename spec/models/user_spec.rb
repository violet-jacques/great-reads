require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).case_insensitive }
  end

  describe '#to_h' do
    let(:user) { create(:user) }

    it 'should be a hash of the id, email, and role' do
      expect(user.to_h).to eq(
        id: user.id,
        email: user.email,
      )
    end
  end
end
