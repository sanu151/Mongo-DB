const { dbModel } = require("../module/db.module");

exports.sendData = async (req, res) => {
  try {
    const newProduct = new dbModel({
      title: req.body.title,
      price: req.body.price,
      desc: req.body.desc,
    });
    const saveProduct = await newProduct.save();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
