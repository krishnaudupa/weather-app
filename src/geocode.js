import axios from 'axios'

export default function geocode(cityName) {
    return new Promise(function (resolve, reject) {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoiZ2xvcnlnbG9yeXVuaXRlZDQ0NCIsImEiOiJja2docDRoM3UwM2RrMnJxaWk2MHBwcXBmIn0.BUWaM8ih7oCrEf4P5UnShA`)
            .then(function (response) {
                resolve(response.data.features[0].geometry.coordinates)
            })
            .catch(function (error) {
                reject('cordinates could not be found')
            })
    })
}
