'use strict';

import config from '../config.json';
import request from 'superagent';

export function fetchPlaces() {
  return new Promise((resolve, reject) => {
    request.get(config.apiUrl)
      .withCredentials()
      .end(function(err, res){
        if (err) return reject(err);
        resolve(res);
      });
  });
};