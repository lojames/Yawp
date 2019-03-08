# Yawp

Yawp is a location based, searchable business directory with crowdsourced reviews and images built on Rails and React + Redux.  Reviews and Images can be posted on the app by any user that signs up and logs in.

# Location

Yawp store's a user's location as latitude, longitude, and a user location string (usually consisting of city and state) in cookies.

Location is initially determined by the user's ip-address using ipstack's IP Geolocation API.  Users can change location either by clicking one of the footer links to one of Yawp's cities or by completing an auto suggestion in the search bar's near field.

# Search

Search returns all businesses in  that partially or exactly match the search query by:
1. Business name
2. Category
3. More Business Info Property that has a value of "Yes"

