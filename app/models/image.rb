class Image < ApplicationRecord
  validates :image_url, presence: true

  belongs_to :user
  belongs_to :business
  belongs_to :review, optional: true
end
