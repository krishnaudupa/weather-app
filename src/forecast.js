import axios from 'axios'


export default function weatherData(lat, long) {
    return new Promise(function (resolve, reject) {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=3fff9b955ff24f75955100020202210&q=${lat} ${long}`)
        .then(function (response) {
            const info = response.data
            resolve(`It is currently ${info.current.temp_c} degress out in ${info.location.name}, ${info.location.region}, ${info.location.country}. The conditon is ${info.current.condition.text}.`)
        })
        .catch(function (error) {
            console.log('Unable fetch the data!')
        })
    })
}