const express = require('express')

const homeController = require('./controllers/homeController')
const createController = require('./controllers/createController')
const aboutController = require('./controllers/aboutController')
const detailsController = require('./controllers/detailsController')

const router = express.Router()

router.get('/', homeController.index)
router.use('/cube', createController)
router.get('/about', aboutController.about)
router.get('/details/:id', detailsController.details)

module.exports = router