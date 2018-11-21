class BusinessCategory < ApplicationRecord
  validates :business_id, :category_id, presence: true
  validates :business_id, uniqueness: { scope: :category_id }

  belongs_to :business
  belongs_to :category
end
