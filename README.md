# [Yawp](https://yawp-app.herokuapp.com/#/)

Yawp is a location based, searchable business directory with crowdsourced reviews and images built on Rails and React + Redux.  Reviews and Images can be posted on the app by anyone that signs up and logs in.

# Location

Yawp store's a user's location as latitude, longitude, and a user location string (usually consisting of city and state) in cookies.

Location is initially determined by the user's ip-address using ipstack's IP Geolocation API.  Users can change location either by clicking one of the footer links to one of Yawp's cities or by completing an auto suggestion in the search bar's near field.

Allowing cookies for Yawp is strongly recommended for the best user experience; however, even without cookies Yawp's search bar recognizes location by URI parsing.

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

Note that a reduced version of the Haversine formula is used (employing a fixed longitudinal delta and latitudinal delta of 0) to derive a more accurate miles per longitude conversion. Miles per latitude is fixed at 69.
