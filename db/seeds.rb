require 'yaml'

Image.destroy_all
Review.destroy_all
BusinessCategory.destroy_all
BusinessProperty.destroy_all
Category.destroy_all
Property.destroy_all
BusinessHour.destroy_all
Business.destroy_all
User.destroy_all

#Create Users
users_data = YAML.load_file(File.join(__dir__, "users.yaml"))
users = []
users_data.each do |u|
  users << User.create(
    email: u[:email],
    first_name: u[:first_name],
    last_name: u[:last_name],
    password: u[:password],
    zip_code: u[:zip_code],
    city: u[:city],
    state: u[:state]
  )
end

#Create Categories
categories_data = YAML.load_file(File.join(__dir__, "categories.yaml"))
categories_data.each do |c|
  Category.create(
    name: c[:name],
    ref: c[:ref]
  )
end

num_errors = 0
data = YAML.load_file(File.join(__dir__, "data.yaml"))
data.values.each do |b|
  # Create Businesses
  business = Business.create(
    name: b[:name],
    neighborhood: b[:neighborhood],
    street_address: b[:street_address],
    city: b[:city],
    state: b[:state],
    zip: b[:zip],
    phone: b[:phone],
    website: b[:website],
    price: b[:price],
    latitude: b[:latitude],
    longitude: b[:longitude]
  )

  # Save business id for future referencce
  business_id = business.id

  # Create BusinessHours
  b[:business_hours].each do |h|
    BusinessHour.create(
      business_id: business_id,
      day: h[0],
      hours: h[1]
    )
  end

  # Create Business Categories
  b[:business_categories].each do |c|
    BusinessCategory.create(
      business_id: business_id,
      category_id: Category.where("ref = '#{c}'").first.id
    )
  end

  # Create Properties and Business Properties
  if b[:business_properties]
    b[:business_properties].each do |p|
      unless Property.where("key = '#{p[0]}' AND value = '#{p[1]}'").exists?
        Property.create(key: p[0], value: p[1])
      end
      BusinessProperty.create(
        business_id: business_id,
        property_id: Property.where("key = '#{p[0]}' AND value = '#{p[1]}'").first.id
      )
    end
  end

  # Used to randomly select user and remove from array
  user_list = users.dup

  # Create Reviews
  if b[:reviews]
    b[:reviews].each do |r|
      # Select random user and remove from array
      user = user_list.delete_at(rand(user_list.length))
      Review.create(
        body: r[:body],
        score: r[:score],
        date: r[:date],
        user_id: user.id,
        business_id: business_id,
      )
    end
  end

  # Create Images
  if b[:images]
    b[:images].each do |i|
      # If image contains a review get user id and review id, otherwise select a
      # random user for user_id
      if i[:body]
        review = Review.where("body = '#{i[:body]}' AND score = '#{i[:score].to_i}'").last
        if review
          review_id = review.id
          user = review.user
        else
          num_errors += 1
          user = user_list.sample
          review_id = nil
        end
      else
        user = user_list.sample
        review_id = nil
      end
      Image.create(
        image_url: i[:image_url],
        comment: i[:comment_url],
        user_id: user.id,
        business_id: business_id,
        review_id: review_id
      )
    end
  end
end

puts "Errors: #{num_errors}"
