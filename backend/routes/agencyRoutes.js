const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agencyController');

// Create a new agency
router.post('/createagency', agencyController.createAgency);

// Get all agencies
router.get('/getallagency', agencyController.getAllAgencies);

// Get a single agency by ID
router.get('/getagency', agencyController.getAgencyById);

// Update an agency by ID
router.put('/updateagency', agencyController.updateAgency);

// Delete an agency by ID
router.delete('/deleteagency', agencyController.deleteAgency);

module.exports = router;
