const { Product } = require("../modules/app.module");

exports.homeRoute = (req, res) => {
  res.send("CRUD Operation using Express and MongoDB");
  res.end();
};

// Create
exports.sendData = async (req, res) => {
  try {
    const { title, price, rating, desc } = req.body;
    const newProduct = new Product({
      title,
      price,
      rating,
      desc,
    });
    const saveProduct = await newProduct.save();
    res.status(201).send(saveProduct);
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Read
exports.getData = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Update
exports.updateData = async (req, res) => {
  try {
    const { title, price, rating, desc } = req.body;
    const id = req.params.id;
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          price,
          rating,
          desc,
        },
      },
      { new: true }
    );
    if (updateProduct) {
      res.status(200).send(updateProduct);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Delete
exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (deleteProduct) {
      res.status(200).send(deleteProduct);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
};
