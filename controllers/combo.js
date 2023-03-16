const Combo = require('../models/combo');
const { body, validationResult } = require('express-validator');

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

// Get Character Combos
exports.getCharacterCombos = function(req, res, next) {
    let query = { character: req.params.character };
    let sortby = '_id';
    let orderby = 'ascending';

    if (req.query.type == 'midscreen') { query.type = 'Midscreen'; }
    else if (req.query.type == 'corner') { query.type = 'Corner'; }

    if (req.query.sort == 'damage') { sortby = 'damage'; }
    else if (req.query.sort == 'date') { sortby = 'date'; }

    if (req.query.orderby == 'desc') { orderby = 'descending'; }

    Combo.find(query)
    .sort({ [sortby]: orderby }) // Sort by (Default: _id in ascending order)
    .exec(function(err, results) {
        if (err) { return next(err); }
        res.json(results);
    });
};

// Create Combo
exports.createCombo = [
    body('input').trim().escape().isLength({ min: 1 }).withMessage('Input required.').isLength( {max: 500 }).withMessage('Input must have 500 characters or less.'),
    body('notes', 'Notes must have 500 characters or less.').trim().escape().isLength({ max: 500 }),

    function(req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        } else {
            const combo = new Combo({
                character: req.body.character,
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
        }
    }
];

// Update Combo
exports.updateCombo = [
    body('input').trim().escape().isLength({ min: 1 }).withMessage('Input required.').isLength( {max: 500 }).withMessage('Input must have 500 characters or less.'),
    body('notes', 'Notes must have 500 characters or less.').trim().escape().isLength({ max: 500 }),

    function(req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        } else {
            const combo = new Combo({
                _id: req.params.comboId,
                character: req.body.character,
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
        }
    }
];

// Delete Combo
exports.deleteCombo = function(req, res, next) {
    Combo.findByIdAndRemove(req.params.comboId, function(err) {
        if (err) { return next(err); }
        res.json({
            message: 'Success'
        });
    });
};