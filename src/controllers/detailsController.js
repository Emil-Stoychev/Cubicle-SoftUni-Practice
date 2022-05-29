const cubes = require('../db.json')

exports.details = (req, res) => {
    let currCube = cubes.find(x => x.id == req.params.id)
    res.render('details', { currCube })
}