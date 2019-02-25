class BusinessProperty < ApplicationRecord
  validates :business_id, :property_id, presence: true
  validates :business_id, uniqueness: { scope: :property_id }

  belongs_to :business
  belongs_to :property
end
