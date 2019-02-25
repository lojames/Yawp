class Category < ApplicationRecord
  validates :name, :ref, presence: true
  validates :ref, uniqueness: true

  has_many :business_categories
  has_many :businesses, through: :business_categories

end
