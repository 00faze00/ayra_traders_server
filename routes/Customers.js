const express = require('express');

const customerController = require('../controllers/Customers');

const router = express.Router();

router.get('/customers/:custId', customerController.getCustomer);

router.get('/customers', customerController.getALLCustomers);

router.post('/customers/add_customer', customerController.createCustomer);

router.post('/customers/edit_customer', customerController.editCustomer);

router.post('/customers/remove_customer', customerController.deleteCustomer);

module.exports = router;