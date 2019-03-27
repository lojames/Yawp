require 'json'
require 'net/http'

class Business < ApplicationRecord
  validates :name, :street_address, :city, :state, :zip, :latitude, :longitude, presence: true

  has_many :business_hours
  has_many :reviews
  has_many :images
  has_many :business_categories
  has_many :categories, through: :business_categories
  has_many :reviewers, through: :reviews, source: :user
  has_many :imagers, through: :images, source: :images

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

  #Finds all businesses in bounding box where center is lat,lon using radius in miles
  def self.in_bounds(lat, lon, radius=5)
    miles_per_lat = 69.0
    miles_per_lon = Business.spherical(lat)

    del_lat = radius/miles_per_lat
    del_lon = radius/miles_per_lon

    self.where("latitude < ?", lat+del_lat )
      .where("latitude > ?", lat-del_lat)
      .where("longitude < ?", lon+del_lon)
      .where("longitude > ?", lon-del_lon)
  end

  #Gets miles per longitude conversion using spherical trigonometry
  def self.spherical(lat)
    phi = Math::PI*lat/180
    a = (Math.cos(phi) * 68.703)
  end

end
