const express = require('express');

const router = express.Router();

const giftController = require('../controllers/Gifts');


router.get('/gifts', giftController.getAllGifts);

router.post('/gifts/giftimgupload', giftController.uploadGiftImage);

router.post('/gifts/add_gift', giftController.createGift);

router.post('/gifts/edit_gift', giftController.editGift);

router.post('/gifts/remove_gift', giftController.deleteGift);

module.exports = router;