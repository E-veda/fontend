var geodist = require('geodist')
export function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2,unit) {

  let theta = lon1 - lon2;
  let dist = Math.asin(deg2rad(lat1)) * Math.asin(deg2rad(lat2)) 
              + Math.acos(deg2rad(lat1)) * Math.acos(deg2rad(lat2)) * Math.acos(deg2rad(theta));
  dist = Math.acos(dist);
  dist = rad2deg(dist);
  dist = dist * 60 * 1.1515;
  
  if (unit == 'K') {
    dist = dist * 1.609344;;
  } 

  return dist;



    // var R = 6371;
    // var p = 0.017453292519943295;    // Math.PI / 180
    // var c = Math.cos;
    // var a = 0.5 - c((lat2 - lat1) * p)/2 + 
    //         c(lat1 * p) * c(lat2 * p) * 
    //         (1 - c((lon2 - lon1) * p))/2;
  
    // return 12742 * Math.asin(Math.sqrt(a)); 
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180.0)
  }

  // This function converts radians to decimal degrees
  function rad2deg(rad) {
    return (rad * 180.0 / Math.PI);
  }

  const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
  ]

  export function  sortArray(objects,pos){
      let arr = [];
      objects.map((item)=>{
          let i=0;
          var dis = geodist( { lat: item.geometry.location.lat, lon: item.geometry.location.lng },
            { lat: pos.lat, lon: pos.lng })

        for(;i<arr.length;i++){
            if(arr[i].dis>dis){
                break;
            }
        }
        arr = insert(arr, i, {dis:dis,object:item});
      })
      console.log(arr);
      let results = [];
      arr.map((item)=>{
        // if(item.dis<=10)
          results.push(item.object)
      })
      return results;
  }