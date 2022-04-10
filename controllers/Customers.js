const db = require('../util/database');

const FETCH_ALL_CUSTOMER = "select * from customers";


exports.getALLCustomers = async (req, res, next) => {
        db.query(FETCH_ALL_CUSTOMER, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
}; 