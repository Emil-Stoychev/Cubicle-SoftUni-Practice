const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const router = require('./routes')
const port = 5000

const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

const url = 'mongodb://localhost:27017/CubeServer'
mongoose.connect(url)
    .then(() => {
        console.log('Successfuly connected to DB');
    })
    .catch((err) => {
        console.log('DB Error:', err);
    })

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(router)

app.listen(port, () => console.log(`Server is listening on port ${port}...`))