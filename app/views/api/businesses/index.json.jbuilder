@businesses.each do |business|
  json.set! business.id do
    user.extract! business, :name, :phone, :street_address,
