const db = require('../util/database');


exports.createCustomer = (req, res, next) => {
    const custName = req.body.custName;
    const custEmail = req.body.custEmail;
    const custNumber = req.body.custNumber;
    const custPoints = req.body.custPoints;

    db.query("insert into customers (custname, custemail, custnum, custpoints) values ('" + custName + "', '" + custEmail + "', " + custNumber + " , " + custPoints + ")", (err, result) => {
        if (err) throw err;
        console.log(result);
    });
};

exports.editCustomer = (req, res, next) => {
    const custName = req.body.custName;
    const custId = req.body.custId;
    const custEmail = req.body.custEmail;
    const custNumber = req.body.custNumber;
    const custPoints = req.body.custPoints;

    db.query("update customers set custname='"+ custName +"', custemail='"+ custEmail +"', custnum="+ custNumber +", custpoints="+ custPoints +" where custid='"+ custId +"'", (err, result) => {
        if (err) throw err;
        console.log(result);
    });
};

exports.deleteCustomer = (req, res, next) => {
    const custId = req.body.custId;

    db.query("delete from customers where custid='"+ custId +"'", (err, result) => {
        if (err) throw err;
        console.log(result);
    });
};


exports.getALLCustomers = async (req, res, next) => {
        db.query("select * from customers", function (err, result) {
            if (err) throw err;
            res.json(result);
        });
}; 