const express = require("express");

const purchaseController = require('../controllers/Purchases');

const router  = express.Router();

router.get("/purchases/:custId", purchaseController.getAllPurchasesById);

router.get('/purchases/getPoinst/:custId', purchaseController.getTotalPointsById);

router.post("/add_purchases", purchaseController.createPurchase);

module.exports = router;