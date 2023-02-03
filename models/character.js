const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 20,
        required: true
    },
    slug: {
        type: String,
        minLength: 1,
        maxLength: 20,
        required: true
    }
});

module.exports = mongoose.model('Character', CharacterSchema);