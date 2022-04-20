const db = require('../util/database');


exports.getALLCustomers = async (req, res, next) => {
        db.query("select * from customers", function (err, result) {
            if (err) throw err;
            res.json(result);
        });
}; 