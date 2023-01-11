const Combo = require('../models/combo');

// Get Combo
exports.getCombo = function(req, res, next) {
    Combo.findOne({ '_id': req.params.comboId })
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