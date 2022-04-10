const express = require('express');

const customerController = require('../controllers/Customers');

const router = express.Router();

router.get('/customers', customerController.getALLCustomers);

module.exports = router;