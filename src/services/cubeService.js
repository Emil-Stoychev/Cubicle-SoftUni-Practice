const cubes = require('../db.json')

exports.getAll = (search = '', fromInput, toInput) => {
    let from = Number(fromInput) || 0
    let to = Number(toInput) || 6

    return cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)
}