class Review < ApplicationRecord
  validates :body, :user_id, :business_id, presence: true
  validates :business_id, uniqueness: { scope: :user_id }

  belongs_to :business
  belongs_to :user
  has_many :images
end
