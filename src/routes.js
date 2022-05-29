const express = require('express')

const homeController = require('./controllers/homeController')
const createController = require('./controllers/createController')
const aboutController = require('./controllers/aboutController')

const router = express.Router()

router.get('/', homeController.index)
router.get('/create', createController.create)
router.get('/about', aboutController.about)

module.exports = router