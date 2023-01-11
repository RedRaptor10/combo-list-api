const express = require('express');
const router = express.Router();

// Controller
const comboController = require('../controllers/combo');

// Get Combo
router.get('/:comboId', comboController.getCombo);

// Create Combo
router.post('/create', comboController.createCombo);

module.exports = router;