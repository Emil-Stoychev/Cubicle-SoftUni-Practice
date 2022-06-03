const mongoose = require('mongoose')

let accessorySchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    cubes: Array,
})

const Accessory = mongoose.model('Accessory', accessorySchema)

exports.Accessory = Accessory