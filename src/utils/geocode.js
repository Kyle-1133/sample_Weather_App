const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia3J0MDAxMyIsImEiOiJjbGN1cWMwMDMwbjJ6M3BxcDAyeW84ejJzIn0.TAV8r9c9pIx_rhFw0MCImQ&limit=1'


    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode