require "rails_helper"

RSpec.describe UserSerializer do
  describe ".serialze" do
    let(:first_name) { "Sup" }
    let(:last_name) { "Dawg" }
    let(:email) { "email@example.com" }
    let(:user) do
      FactoryBot.create(
        :user,
        first_name: first_name,
        last_name: last_name,
        email: email,
      )
    end
    subject(:serialized_user) { described_class.serialize(user) }

    it "serializes the object" do
      expect(serialized_user).to eq(
        id: user.id,
        email: email,
        first_name: first_name,
        last_name: last_name,
      )
    end
  end
end
