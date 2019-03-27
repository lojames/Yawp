import React from 'react';
import ReactDOM from 'react-dom'

const iconSymbol = (fillColor, strokeColor) => {
  return {
    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
    fillColor: fillColor,
    fillOpacity: 1,
    strokeColor: strokeColor,
    strokeWeight: 1,
    scale: 1,
  }
}

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
        url: `#/biz/${business.id}`,
        label: {text: (idx+1).toString(), color: "white", fontFamily: 'helvetica'},
      })

      const infoWindow = new google.maps.InfoWindow({
        content: `${business.name}`
      });

      google.maps.event.addListener(marker, 'mouseover', () => {
        marker.setIcon(iconSymbol('white','red'));
        marker.setLabel();
        marker.setZIndex(marker.zIndex+50);
        infoWindow.open(this.map, marker);
      });

      google.maps.event.addListener(marker, 'mouseout', () => {
        marker.setIcon();
        marker.setLabel({text: (idx+1).toString(), color: "white", fontFamily: 'helvetica'});
        marker.setZIndex(marker.zIndex-50);
        infoWindow.close();
      });

      google.maps.event.addListener(marker, 'click', () => {
        window.location.href = marker.url;
      });
    });

  }

  render(){
    return (
      <div className='search-map-container'>
        <div id='search-map' ref={map => this.mapNode = map}>
        </div>
      </div>
    )
  }
}

export default BusinessesMap;
