var axios = require("axios").default;

export const nearbysearch = async() => {
    let pagetoken;
    let count=2;
        while(count-->0){
        console.log(pagetoken);
        var options = (pagetoken) ? {
        method: 'GET',
        url: 'https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json',
        params: {
            location: '22.7196,75.8577',
            radius:'50000',
            language: 'en',
            opennow: 'true',
            keyword: 'hospital',
            type: 'hospital',
            pagetoken:'2'
        },
        headers: {
            'x-rapidapi-host': 'google-maps28.p.rapidapi.com',
            'x-rapidapi-key': 'f8b1d789d7mshb999448c9010a5cp1838bajsn77e38aa5c4b9'
        }
        }:{
            method: 'GET',
        url: 'https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json',
        params: {
            location: '22.7196,75.8577',
            radius:'50000',
            language: 'en',
            opennow: 'true',
            keyword: 'hospital',
            type: 'hospital',
        },
        headers: {
            'x-rapidapi-host': 'google-maps28.p.rapidapi.com',
            'x-rapidapi-key': 'f8b1d789d7mshb999448c9010a5cp1838bajsn77e38aa5c4b9'
        }
        }
        const data = await axios.request(options).catch(function (error) {
            console.error(error);
        });
        pagetoken = data.data.next_page_token;
        console.log(pagetoken);
        for(let i=0;i<data.data.results.length;i++){
            if(data.data.results[i].name.toLowerCase().indexOf('ashtang')>=0){
                console.log(data.data.results[i]);
                break;
            }
        }
       
    }
}