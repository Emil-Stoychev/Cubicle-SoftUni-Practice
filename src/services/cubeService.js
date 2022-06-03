const { Cube } = require('../models/cubesSchema')

exports.getAll = async(search = '', fromInput, toInput) => {
    let from = Number(fromInput) || 0
    let to = Number(toInput) || 6

    let cubes = await Cube.find({ name: { $regex: new RegExp(search, 'i') } })
        .where('difficultyLevel').lte(to).gte(from)
        .lean()

    return cubes
}