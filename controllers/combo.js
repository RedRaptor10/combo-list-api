const Combo = require('../models/combo');

// Get Combo
exports.getCombo = function(req, res, next) {
    Combo.findOne({ '_id': req.params.comboId })
    .exec(function(err, results) {
        if (err) { return next(err); }
        res.json(results);
    });
};

// Get Combos
exports.getCombos = function(req, res, next) {
    let sortby = '_id';
    let orderby = 'ascending';

    if (req.query.sort == 'damage') { sortby = 'damage'; }
    else if (req.query.sort == 'date') { sortby = 'date'; }

    if (req.query.orderby == 'desc') { orderby = 'descending'; }

    Combo.find({})
    .sort({ [sortby]: orderby }) // Sort by (Default: _id in ascending order)
    .exec(function(err, results) {
        if (err) { return next(err); }
        res.json(results);
    });
};

// Create Combo
exports.createCombo = function(req, res, next) {
    const combo = new Combo({
        damage: req.body.damage,
        date: req.body.date,
        input: req.body.input,
        notes: req.body.notes,
        tags: req.body.tags,
        type: req.body.type
    });

    // Save to database
    combo.save(function(err) {
        if (err) { return next(err); }
        res.json({
            combo: {
                _id: combo._id,
                ...req.body
            },
            message: 'Success'
        });
    });
};

// Update Combo
exports.updateCombo = function(req, res, next) {
    const combo = new Combo({
        _id: req.params.comboId,
        damage: req.body.damage,
        date: req.body.date,
        input: req.body.input,
        notes: req.body.notes,
        tags: req.body.tags,
        type: req.body.type
    });

    // Save to database
    Combo.findByIdAndUpdate(req.params.comboId, combo, { new: true }, function(err, results) {
        if (err) { return next(err); }
        res.json({
            combo: results,
            message: 'Success'
        });
    });
};

// Delete Combo
exports.deleteCombo = function(req, res, next) {
    Combo.findByIdAndRemove(req.params.comboId, function(err) {
        if (err) { return next(err); }
        res.json({
            message: 'Success'
        });
    });
};