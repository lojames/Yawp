# [Yawp](https://yawp-app.herokuapp.com/#/)

Yawp is a location based, searchable business directory with crowdsourced reviews and images built on Rails and React + Redux.  Reviews and Images can be posted on the app by anyone that signs up and logs in.

# Location

Yawp store's a user's location as latitude, longitude, and a user location string (usually consisting of city and state) in cookies.

By default, location is obtained from the user's ip-address using ipstack's IP Geolocation API.  Users can change location either by clicking one of the footer links to one of Yawp's cities or by completing an auto suggestion in the search bar's near field.

Location in general is determined with the following priority:
1. When not on the splash page, the search parameters of the URL (if any).
2. Cookies
3. User IP Address

Allowing cookies for Yawp is strongly recommended for the best user experience; however, even without cookies Yawp's search bar recognizes location by URI parsing and IP Address.

# Search

The search bar has 2 input fields: "find" and "near".

The "near" input field is pre-filled with the user's location.  A user's location can be changed by selecting one of the auto-suggestions that pop up under the input field as the user types.  The auto-complete for this field utilizes the Algolia places API.

A search returns all businesses (in an approximately 10 mile by 10 mile box with the user location in the center) that partially or exactly match the text input in the "find" input field by:
1. Business name
2. Category
3. More Business Info Property key that has a value of yes
4. Keywords associated to More Business Info Property

A few examples of More Business Info Property keys include "Delivery", "Take-out", and "Accepts Credit Cards".

Keywords is a string of comma-space delimited word forms of the key of a Business Property.

# On the Discrepencies in Miles per Longitude at Different Latitudes

Due to the nature of significantly varying miles per longitude depending on latitude, both the Haversine (spherical trigonometry) and Vincenty forumulas were investigated for miles per longitude conversion.  Since latitude is fixed, the Haversine was reduced to a simple spherical trigonometric conversion.  Due to the complexity of Vincenty's formula, the Vincenty implementation was not reduced (which could significantly cut down on execution time).

For testing, each trial consisted of generating random coordinates from somewhere in the United states and getting the execution time of each approach. The Vincenty approach took an averge of anywhere from 6 to 23 times longer with each average consisting of 100000 trials. While this may seem significant, the execution time of Vincenty's algorithm is still a small fraction of a millisecond.  The code for the testing simulation follows.

```
num_trials = 100000
vincenty_total_time = 0
haversine_total_time = 0
(0...num_trials).each do |i|
  lat1 = 32.518000
  lat2 = 47.315658
  lon1 = -116.193276
  lon2 = -88.294301
  x = random(lat1, lat2)
  y = random(lon1, lon2)
  t1 = Time.now
  vincety([x, y], [x,y+1])/1609.344
  t2 = Time.now
  vincenty_total_time += (t2-t1)

  t1 = Time.now
  haversine(x)
  t2 = Time.now
  haversine_total_time += (t2-t1)
end
vincenty_average_time = vincenty_total_time/num_trials*1000
haversine_average_time = haversine_total_time/num_trials*1000

haversine_average_time/vincenty_average_time

puts "Vincenty Average Time: #{vincenty_average_time} ms"
puts "Haversine Average Time: #{haversine_average_time} ms" 
puts "Num Trials: #{num_trials}"
puts "On average, Vincenty takes #{vincenty_average_time/haversine_average_time} times longers to run."
```

Yawp currently uses the spherical trigonometric approach where the largest miles per longitude is assumed 68.703 while fixing miles per latitude at 69, however, a future version of Yawp will utilize Vincenty's formula.
