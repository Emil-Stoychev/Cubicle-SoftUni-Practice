const mongoose = require('mongoose')

let CubeSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    difficultyLevel: Number,
    description: String,
    accessories: Array,
})

const Cube = mongoose.model('Cube', CubeSchema)

exports.Cube = Cube