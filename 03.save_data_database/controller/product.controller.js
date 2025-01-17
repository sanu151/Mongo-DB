const { products } = require("../modules/product.module");

exports.sendData = (req, res) => {
  res.send("Welcome to Product Page");
};

exports.productData = async (req, res) => {
  try {
    const newProduct = new products({
      title: req.body.title,
      price: req.body.price,
      desc: req.body.desc,
    });

    const saveProduct = await newProduct.save();
    res.status(201).send(saveProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
