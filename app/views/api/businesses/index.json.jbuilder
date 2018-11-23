json.businesses do
  @businesses.each do |business|
    num_reviews = business.reviews.length
    score = business.reviews.map {|review| review.score}.reduce(:+)
    json.set! business.id do
      json.extract! business, :id, :name, :phone, :street_address, :neighborhood
      json.num_reviews  num_reviews
      json.score score ? score.fdiv(num_reviews) : 0
      json.reviews [business.reviews.first.id] if business.reviews.first
      json.images [business.images.first.id] if business.images.first
    end
  end
end

json.reviews do
  @businesses.each do |business|
    review = business.reviews.first
    if review
      json.set! review.id do
        json.extract! review, :id, :body
      end
    end
  end
end

json.images do
  @businesses.each do |business|
    image = business.images.first
    if image
      json.set! image.id do
        json.extract! image, :image_url
      end
    end
  end
end
