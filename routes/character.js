const express = require('express');
const router = express.Router();

// Controller
const characterController = require('../controllers/character');

// Get Characters
router.get('/', characterController.getCharacters);

// Get Character
router.get('/:characterId', characterController.getCharacter);

module.exports = router;