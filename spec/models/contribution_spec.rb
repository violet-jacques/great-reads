require "rails_helper"

RSpec.describe Contribution do
  describe "associations" do
    it { should belong_to(:contributable) }
    it { should belong_to(:contributor) }
  end

  describe "validations" do
    it { should validate_presence_of(:contributable_id) }
    it { should validate_presence_of(:contributable_type) }
    it { should validate_presence_of(:contributor_id) }
    it { should validate_presence_of(:contribution_type) }
    it do
      should define_enum_for(:contribution_type).with_values(
        author: 0,
        translator: 1,
        illustrator: 2,
        foreward: 3,
        narrator: 4,
        introducer: 5,
      )
    end
  end
end
