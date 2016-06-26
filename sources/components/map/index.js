'use strict';

import config from '../../config.json';
import {fetchPlaces} from '../../apis/placesApi';
import {initMap} from './map/map';
import {initPlaces} from './places/places';

function init () {
  fetchPlaces().then((res) => {
    let places = res.body.rows;
    initMap(places)
    initPlaces(places);
  });
}

export {init as initMap};
