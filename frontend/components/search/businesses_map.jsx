import React from 'react';
import ReactDOM from 'react-dom'

class BusinessesMap extends React.Component{

  componentDidUpdate(){
    const lat = parseFloat(this.props.location.search.split("&lon=")[0].split("&lat=")[1]);
    const lon = parseFloat(this.props.location.search.split("&loc=")[0].split("&lon=")[1]);
    const mapOptions = {
      center: { lat: lat, lng: lon },
      zoom: 10,
      streetViewControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      fullscreenControl: false,
      zoomControlOptions:{
        position: google.maps.ControlPosition.LEFT_TOP
      }
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    Object.values(this.props.businesses).forEach ( (business, idx) => {
      const marker = new google.maps.Marker({
        position: { lat: parseFloat(business.latitude), lng: parseFloat(business.longitude) },
        map: this.map,
        title: business.name,
        label: {text: (idx+1).toString(), color: "white"}
      })
    });
  }

  render(){
    return (
      <div id='search-map-container' ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default BusinessesMap;
