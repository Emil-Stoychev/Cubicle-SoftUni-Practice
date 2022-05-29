const express = require('express')
const port = 5000

const app = express()

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => console.log(`Server is listening on port ${port}...`))