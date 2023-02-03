const express = require('express');
const router = express.Router();

// Controllers
const characterController = require('../controllers/character');
const comboController = require('../controllers/combo');

// Get Characters
router.get('/', characterController.getCharacters);

// Get Character
router.get('/:characterId', characterController.getCharacter);

// Get Character Combos
router.get('/:characterId/combos', comboController.getCharacterCombos);

module.exports = router;