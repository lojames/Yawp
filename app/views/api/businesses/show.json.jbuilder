hours = @business.business_hours.map do |business_hour|
  [business_hour.day, business_hour.hours]
end

business_images = @images.map {|image| image.id }
business_reviews = @reviews.map {|review| review.id }
num_reviews = @reviews.length
score = @reviews.map {|review| review.score}.reduce(:+)

json.set! @business.id do
  json.extract! @business, :id, :name, :neighborhood, :street_address, :city, :state,
  :zip, :latitude, :longitude, :phone, :website, :price
  json.business_hours hours
  json.num_reviews num_reviews
  json.score score ? score.fdiv(num_reviews) : 0
  json.image_ids business_images
  json.review_ids business_reviews
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

json.images do
  @images.limit(2).each do |image|
    json.set! image.id do
      json.extract! image, :id, :image_url, :comment
    end
  end
end
