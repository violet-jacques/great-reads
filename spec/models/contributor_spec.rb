require "rails_helper"

RSpec.describe Contributor, type: :model do
  describe "validations" do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:born_at) }
    it { should validate_presence_of(:birth_place) }
    it { should validate_presence_of(:description) }
  end

  describe "associations" do
    it { should have_many(:contributions).dependent(:destroy) }
    it do
      should have_many(
        :influencee_influences
      ).with_foreign_key(
        "influencer_id"
      ).class_name(
        "Influence",
      ).inverse_of(
        :influencee,
      ).dependent(:destroy)
    end
    it do
      should have_many(
        :influencer_influences
      ).with_foreign_key(
        "influencee_id"
      ).class_name(
        "Influence",
      ).inverse_of(
        :influencer,
      ).dependent(:destroy)
    end
    it do
      should have_many(
        :influences
      ).through(
        :influencer_influences
      ).source(
        :influencer
      )
    end
    it do
      should have_many(
        :influencees
      ).through(
        :influencee_influences
      ).source(
        :influencee
      )
    end
  end
end
