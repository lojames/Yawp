class User < ApplicationRecord
  validates :name, :street_address, :city, :state, :zip, :latitude, :longitude, presence: true

  def self.geocode()
  end

end
