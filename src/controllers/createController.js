const router = require('express').Router()
let cubes = require('../db.json')
const fs = require('fs/promises')
const path = require('path')

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

    let id = cubes[cubes.length - 1].id
    cube.id = id + 1

    cubes.push(cube)

    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), { encoding: 'utf-8' })

    res.redirect('/')
})

module.exports = router