'use strict';

import config from '../../../config.json';
import template from './places.jade';
import './places.css';

export function initPlaces(places) {
  let elem = document.getElementById('places');
  let listElem = document.createElement('div');
  listElem.className = 'place-list';
  listElem.innerHTML = template({places: places});

  elem.appendChild(listElem);
}