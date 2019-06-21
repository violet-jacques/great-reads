FactoryBot.define do
  factory :influence do
    influencee { |influencee| influencee.association(:contributor) }
    influencer { |influencer| influencer.association(:contributor) }
  end
end
