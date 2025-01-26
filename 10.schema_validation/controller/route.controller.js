const { Products } = require("../modules/db.module");

exports.notFoundPage = (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
  res.end();
};

exports.homeRoute = (req, res) => {
  res.render("home", { route_name: "Home" });
};

const errorData = (error) => {
  res.status(501).send(`<h3>Internal Server Error : ${error.message}`);
  res.end();
};

exports.sendData = async (req, res) => {
  try {
    const { title, price, rating, desc } = req.body;
    const newProduct = new Products({
      title,
      price,
      rating,
      desc,
    });
    const saveData = await newProduct.save();
    res.status(201).send(saveData);
  } catch (error) {
    errorData(error);
  }
};

exports.getData = async (req, res) => {
  let allProducts;
  try {
    allProducts = await Products.find();
    res.render("products", {
      route_name: "Products",
      allProducts: allProducts,
    });
  } catch (error) {
    errorData(error);
  }
};
