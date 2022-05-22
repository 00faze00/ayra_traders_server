const db = require('../util/database');


exports.createCustomer = (req, res, next) => {
    const custName = req.body.custName;
    const custEmail = req.body.custEmail;
    const custNumber = req.body.custNumber;

    db.query("insert into customers (custname, custemail, custnum) values ('" + custName + "', '" + custEmail + "', " + custNumber + ")", (err, result) => {
        if (err) throw err;
        res.end("Customer created");
    });
};

exports.editCustomer = (req, res, next) => {
    const custName = req.body.custName;
    const custId = req.body.custId;
    const custEmail = req.body.custEmail;
    const custNumber = req.body.custNumber;

    const UPDATE_CUSTOMER = "update customers set custname='"+ custName +"', custemail='"+ custEmail +"', custnum="+ custNumber +" where custid='"+ custId +"'";

    db.query(UPDATE_CUSTOMER, (err, result) => {
        if (err) throw err;
        res.end("Customer Updated");
    });
};

exports.deleteCustomer = (req, res, next) => {
    const custId = req.body.custId;

    db.query("delete from customers where custid='"+ custId +"'", (err, result) => {
        if (err) throw err;
        res.end("Customer Deleted");
    });
};

exports.getCustomer = (req, res, next) => {
    const custId = req.params.custId;
    db.query("select * from customers where custid="+ custId, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};


exports.getALLCustomers = (req, res, next) => {
        db.query("select * from customers", function (err, result) {
            if (err) throw err;
            res.json(result);
        });
}; 