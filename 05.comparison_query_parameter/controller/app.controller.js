const { dbModel } = require("../module/db.module");

exports.homeRoute = (req, res) => {
  res.send(
    "find data using comparison query parameter in the URL like /product?price=15000"
  );
};

exports.sendData = async (req, res) => {
  try {
    const newProduct = new dbModel({
      title: req.body.title,
      price: req.body.price,
      desc: req.body.desc,
    });
    const saveProduct = await newProduct.save();
    res.status(200).send(saveProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.receiveData = async (req, res) => {
  try {
    const price = req.query.price;
    const allProduct = await dbModel.find({ price: { $gt: price } });
    res.status(200).send(allProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
