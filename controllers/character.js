const Character = require('../models/character');

// Get Character
exports.getCharacter = function(req, res, next) {
    Character.findOne({ '_id': req.params.characterId })
    .exec(function(err, results) {
        if (err) { return next(err); }
        res.json(results);
    });
};

// Get Characters
exports.getCharacters = function(req, res, next) {
    let sortby = '_id';
    let orderby = 'ascending';

    if (req.query.sort == 'name') { sortby = 'name'; }
    if (req.query.orderby == 'desc') { orderby = 'descending'; }

    Character.find({})
    .sort({ [sortby]: orderby }) // Sort by (Default: _id in ascending order)
    .exec(function(err, results) {
        if (err) { return next(err); }
        res.json(results);
    });
};