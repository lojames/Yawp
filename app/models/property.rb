class Property < ApplicationRecord
  validates :key, :value, presence: true

  has_many :business_properties
  has_many :businesses, through: :business_properties

end
