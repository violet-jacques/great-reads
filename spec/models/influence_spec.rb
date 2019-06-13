require "rails_helper"

RSpec.describe Influence, type: :model do
  describe "validations" do
    it { should validate_presence_of(:influencer_id) }
    it { should validate_presence_of(:influencee_id) }
  end

  describe "associations" do
    it { should belong_to(:influencer).class_name("Contributor") }
    it { should belong_to(:influencee).class_name("Contributor") }
  end
end
