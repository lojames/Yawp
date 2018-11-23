require 'json'
require 'net/http'

class StaticPagesController < ApplicationController

  def get_location
    ip = request.remote_ip
    access_key = Rails.application.credentials.ipstack[:api_key]
    url = "http://api.ipstack.com/#{ip}?access_key=#{access_key}"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response.html_safe
  end

  def root
  end
end
