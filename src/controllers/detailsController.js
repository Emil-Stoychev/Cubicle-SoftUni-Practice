const { Cube } = require('../models/cubesSchema')

exports.details = async(req, res) => {
    let currCube = await Cube.findById(req.params.id).lean()

    res.render('details', { currCube })
}