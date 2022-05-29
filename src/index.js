const express = require('express')
const handlebars = require('express-handlebars')
const port = 5000

const app = express()

app.use(express.static('./src/public'))

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', './src/views')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => console.log(`Server is listening on port ${port}...`))