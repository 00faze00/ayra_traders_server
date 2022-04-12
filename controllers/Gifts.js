const multer = require("multer");

const db = require("../util/database");

var temp_path_gift;

const giftImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/gifts/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: giftImageStorage }).single("giftImg");

exports.uploadGiftImage = (req, res, next) => {
  upload(req, res, (err) => {
    // temp_path_gift = req.file.filename;
    // res.setHeader('Content-Type','application/json');
    console.log(req.file);
    res.end("success");
    // res.json({ "imgName": "temp_path_gift" });
  });
};

exports.createGift = (req, res, next) => {
  const giftImgName = req.body.giftImgName;
  const giftId = req.body.giftId;
  const giftName = req.body.giftName;
  const giftPrice = req.body.giftPrice;
  const giftPoint = req.body.giftPoint;

  // upload(req, res, (err) => {
  //   // temp_path_gift = req.file.filename;
  //   // res.setHeader('Content-Type','application/json');
  //   console.log(giftName);
  //   res.end("success");
  //   // res.json({ "imgName": "temp_path_gift" });
  // });

  db.query(
    "insert into gifts (giftimgname, giftname, giftprice, giftpoint) values ('" + giftImgName + "','" +  giftName + "'," + giftPrice + "," + giftPoint +")",
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
};

exports.editGift = (req, res, next) => {
  const giftImgName = req.body.giftImgName;
  const giftId = req.body.giftId;
  const giftName = req.body.giftName;
  const giftPrice = req.body.giftPrice;
  const giftPoint = req.body.giftPoint;

  const UPDATE_QUERY = "update gifts set giftimgname='" + giftImgName +  "', giftname = '" + giftName + "', giftprice = " + giftPrice + ", giftpoint = " + giftPoint + " where giftid = '" + giftId + "'";

  db.query(UPDATE_QUERY, (err, result) => {
    if (err) throw err;
    res.end("Gift Updated");
  });
};

exports.deleteGift = (req, res, next) => {
    const giftId = req.body.giftId;

    const DEL_QUERY = "delete from gifts where giftid="+ giftId;

    db.query(DEL_QUERY, (err, result) => {
        if (err) throw err;
        res.end("gift deleted");
    });
};

exports.getAllGifts = async (req, res, next) => {
  db.query("select * from gifts", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
