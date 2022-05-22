const db = require('../util/database');

exports.createPurchase = (req, res, next) => {
    const custId = req.body.custId;
    const productName = req.body.productName;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const points = req.body.points;

    const QUERY = "insert into purchases (custid, productname, productid, quantity, points) values (" + custId + ", '"+ productName + "', "+ productId +", "+ quantity +"," + points + " )" ;

    db.query(QUERY, (err, result) => {
        if (err) throw err;
        res.end("Purchase added");
    });
};

exports.getTotalPointsById = (req, res, next) => {
    const custId = req.params.custId;
    const QUERY  = 'select sum(points) as totalPoints from purchases where custid=' + custId;

    db.query(QUERY, (err, result) => {
        if (err) throw err;
        if (result) {
            res.send(result);
            // console.log(result);
        } else {
            res.sendStatus(404);
        }
    });
};

exports.getAllPurchasesById = (req, res, next) => {
    const custId = req.params.custId;

    const QUERY  = "select * from purchases where custid =" + custId ;

    db.query(QUERY, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.sendStatus(404);
        };
    });
};