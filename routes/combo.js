const express = require('express');
const router = express.Router();

// Controller
const comboController = require('../controllers/combo');

// Create Combo
router.post('/create', comboController.createCombo);

module.exports = router;