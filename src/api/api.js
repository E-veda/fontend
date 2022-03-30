var axios = require("axios").default;

export const nearbysearch = async() => {
   
    const options = {
      method: 'GET',
      url: 'https://google-maps28.p.rapidapi.com/maps/api/place/findplacefromtext/json',
      params: {
        inputtype: 'textquery',
        fields: 'business_status,formatted_address,geometry,icon,icon_mask_base_uri,icon_background_color,name,permanently_closed,photo,place_id,plus_code,type,opening_hours,price_level,rating,user_ratings_total',
        input: 'Govt. Ashtang Ayurved College',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
        'X-RapidAPI-Key': 'f8b1d789d7mshb999448c9010a5cp1838bajsn77e38aa5c4b9'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}