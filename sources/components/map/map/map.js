'use strict';

import config from '../../../config.json';
import './map.css';

let map;

function setMarker(place) {
  let coordinate = {lat: place.coordinate[0], lng: place.coordinate[1]};

  new google.maps.Marker({
    position: coordinate,
    map: map,
    title: place.location_name
  });
}

export function initMap(places) {
  let pyrmont = {lat: config.lat, lng: config.lng};

  map = new google.maps.Map(document.getElementById(config.elementId), {
    center: pyrmont,
    zoom: config.zoom
  });

  places.forEach(setMarker);
}