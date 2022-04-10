const express = require('express');
const dotenv = require('dotenv/config');
const path = require('path');


const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use('/assets/gifts/img', express.static(path.join(__dirname, '/assets/gifts/img')));



const giftRoute = require('./routes/Gifts');

app.use(giftRoute);

const customerRoute = require('./routes/Customers');

app.use(customerRoute);

app.listen(process.env.PORT, () => {
    console.log("API is running on PORT : ", process.env.PORT);
});




