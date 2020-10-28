import path from 'path'
import express, { query } from 'express'
import hbs from 'hbs'
import geocode from './geocode.js'
import weatherData from './forecast.js'

const app = express()
const __dirname = path.resolve()
const port = process.env.PORT || 8000

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, '../views'))
app.use(express.static(path.join(__dirname, '../public')))
hbs.registerPartials(path.join(__dirname, '../partials'))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            result: 'You must provide a location'
        })
    }
    geocode(req.query.address)
        .then(coordinates => weatherData(coordinates[1], coordinates[0])
            .then(result => res.send({
                result: result
            })
            ).catch(err => res.send(err)))
        .catch(err => res.send(err))
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Hi, I\'m Krishna'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'created by krishna'
    })
})

app.listen(port, () => {
    console.log('server is running' + port)
})
