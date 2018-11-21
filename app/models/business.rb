require 'json'
require 'net/http'

class Business < ApplicationRecord
  validates :name, :street_address, :city, :state, :zip, :latitude, :longitude, presence: true

  has_many :business_hours
  has_many :reviews
  has_many :images
  has_many :business_categories
  has_many :categories, through: :business_categories

  def self.geocode(street_address, city, state, zip)
    access_key = Rails.application.credentials.texas_am_geoservices[:api_key]
    url = "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?version=4.01"
    url += "&streetAddress=#{street_address}&city=#{city}"
    url += "&state=#{state}&zip=#{zip}&apiKey=#{access_key}&format=json"
    uri = URI(url)
    response = Net::HTTP.get(uri).html_safe
    geocode_hash = JSON.parse(response)
    geocode_hash = geocode_hash["OutputGeocodes"][0]
    [geocode_hash["OutputGeocode"]["Latitude"], geocode_hash["OutputGeocode"]["Longitude"]]
  end

end
