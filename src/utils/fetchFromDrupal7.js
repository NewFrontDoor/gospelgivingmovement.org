
import fetch from 'isomorphic-fetch';

export function getFromDrupalAPI(url, callback){
    if(url.includes('?'))
    {
      url += '&display_id=services_1';
    }
    else{
      url += '?display_id=services_1'
    }
    fetch(`https://api.gospelgivingmovement.org/api/views/${url}`)
    .then(resp => resp.json())
    .then(function(data) {
        callback(data);
      })
    .catch(function(error){
      console.log(error);
    })
  }