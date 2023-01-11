const Combo = require('../models/combo');

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