const express = require('express');
const dotenv = require('dotenv/config');
const path = require('path');


const app = express();

const bodyParser = require('body-parser');

const giftRoute = require('./routes/Gifts');
const customerRoute = require('./routes/Customers');
const purchasesRoute = require('./routes/Purchases');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use('/assets/gifts/img', express.static(path.join(__dirname, '/assets/gifts/img')));




app.use(giftRoute);
app.use(customerRoute);
app.use(purchasesRoute);

app.listen(process.env.PORT, () => {
    console.log("API is running on PORT : ", process.env.PORT);
});




