const { Product } = require("../modules/product.module");

exports.productController = (req, res) => {
  res.send(`Welcome to Product Page`);
  res.end();
};

exports.saveProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });

    const productData = await newProduct.save();
    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
