FactoryBot.define do
  factory :contribution do
    contributable { |contributable| contributable.association(:book) }
    contribution_type { :author }
    contributor
  end
end
