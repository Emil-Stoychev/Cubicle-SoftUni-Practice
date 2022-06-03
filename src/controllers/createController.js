const router = require('express').Router()
const { Cube } = require('../models/cubesSchema')
const { Accessory } = require('../models/accessorySchema')

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {
    let cube = req.body

    if (!cube.name || !cube.description || !cube.imageUrl || !cube.difficultyLevel) {
        if (cube.name == '' || cube.name.length == 0 || cube.description == '' || cube.description.length == 0 || cube.imageUrl == '' || cube.imageUrl.length == 0 || cube.difficultyLevel == '' || cube.difficultyLevel.length == 0) {
            return res.status(400).send('Invalid request!')
        }
    }

    Cube.create(cube)

    res.redirect('/')
})

router.get('/create-accessory', (req, res) => {
    res.render('createAccessory')
})

router.post('/create-accessory', async(req, res) => {
    let acc = req.body

    if (!acc.name || !acc.description || !acc.imageUrl) {
        if (acc.name == '' || acc.name.length == 0 || acc.description == '' || acc.description.length == 0 || acc.imageUrl == '' || acc.imageUrl.length == 0) {
            return res.status(400).send('Invalid request!')
        }
    }

    Accessory.create(acc)

    res.redirect('/')
})

router.get('/add-accessory/:cubeId', async(req, res) => {
    let currCube = await Cube.findById(req.params.cubeId).lean()
    let accessories = await Accessory.find({ _id: { $nin: currCube.accessories } }).lean()


    res.render('attachAccessory', { currCube, accessories })
})

router.post('/add-accessory/:cubeId', async(req, res) => {
    let currCube = await Cube.findById(req.params.cubeId)
    let currAccessory = await Accessory.findById(req.body.accessory)

    currCube.accessories.push(currAccessory)

    currCube.save()

    res.redirect(`/details/${currCube._id}`)
})

module.exports = router