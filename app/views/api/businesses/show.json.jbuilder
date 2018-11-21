hours = @business.business_hours.map do |business_hour|
  [business_hour.day, business_hour.hours]
end

business_images = @business.images.map {|image| image.id}
num_reviews = @business.reviews.length
score = @business.reviews.map {|review| review.score}.reduce(:+)

json.businesses do
  json.set! @business.id do
    json.num_reviews num_reviews
    json.score score.fdiv(num_reviews)
    json.extract! @business, :id, :name, :neighborhood, :street_address, :city, :state,
    :zip, :latitude, :longitude, :phone, :website, :price, :latitude, :longitude
    json.business_hours hours
    json.image_ids business_images
  end
end

@reviews.each do |review|
  images = review.images.limit(3)
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :score, :body, :date
      json.first_name review.user.first_name
      json.last_name review.user.last_name[0]+'.'
      json.images images.ids unless images.empty?
    end
  end
  json.images do
    images.each do |image|
      json.set! image.id do
        json.extract! image, :id, :image_url, :comment
      end
    end
  end
end

@business.images.each do |image|
  json.images do
    json.set! image.id do
      json.extract! image, :id, :image_url, :comment
    end
  end
end
