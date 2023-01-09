const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComboSchema = new Schema({
    damage: { type: mongoose.Decimal128, required: true },
    date: { type: Date, required: true },
    input: { type: String, minLength: 1, maxLength: 500, required: true },
    notes: { type: String, maxLength: 500 },
    tags: [{ type: String, minLength: 1, maxLength: 20 }],
    type: { type: String, minLength: 1, maxLength: 20, required: true }
});

module.exports = mongoose.model('Combo', ComboSchema);