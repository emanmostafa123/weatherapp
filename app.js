const request = require('request')
const urlmap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiZW1hbm1vc3RhZmE3ODciLCJhIjoiY2t6ZmI3OHQ2MHBlcTJ5bnIzcWUzdWM5YSJ9.pGyHgczzbojOFcdWcC4VrQ'


request({url:urlmap,json:true},(err,response)=>{
    if (err){
        console.log('ERROR')
    }
    else if(response.body.features.length == 0){
        console.log(response.body.message)
    }
    else if(response.body.message){
        console.log(response.body.message)
    }
    else{
        console.log(response.body.features[0].center[1])
    }
})