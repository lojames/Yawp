# Yawp

Yawp is a location based, searchable business directory with crowdsourced reviews and images built on Rails and React + Redux.

# Location

Location is initially determined by the user's ip-address using ipstack's IP Geolocation API.  Latitude, longitude, city, and state are obtained from the api and then stored in cookies for subsequent searches until the user changes location either by specifying a different search location in the "near" input portion of the search bar or by clicking a link.

