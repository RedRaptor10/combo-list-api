const express = require('express');
const router = express.Router();

// Controller
const comboController = require('../controllers/combo');

// Get Combos
router.get('/', comboController.getCombos);

// Get Combo
router.get('/:comboId', comboController.getCombo);

// Create Combo
router.post('/create', comboController.createCombo);

// Update Combo
router.put('/:comboId/update', comboController.updateCombo);

// Delete Combo
router.delete('/:comboId/delete', comboController.deleteCombo);

module.exports = router;