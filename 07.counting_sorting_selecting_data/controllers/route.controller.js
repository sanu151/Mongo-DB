const { Products } = require("../modules/app.module");

exports.homeRoute = (req, res) => {
  res.send("<h2>Counting Sorting and Selection data from database</h2>");
  res.end();
};

exports.sendData = async (req, res) => {
  const newProduct = new Products({
    title: req.body.title,
    price: req.body.price,
    rating: req.body.rating,
    desc: req.body.desc,
  });
  try {
    const saveProducts = await newProduct.save();
    res.status(201).send(saveProducts);
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.getData = async (req, res) => {
  try {
    const price = req.query.price;
    const rating = req.query.rating;

    let allProducts;
    if (price && rating) {
      allProducts = await Products.find({
        $or: [{ price: { $gte: price } }, { rating: { $gte: rating } }],
      }).sort({ price: 1 });
      res.status(200).send(allProducts);
    } else if (price) {
      allProducts = await Products.find({
        price: { $gte: price },
      }).select({ title: 1, price: 1, _id: 0 });
      const totalCount = allProducts.length;
      res.status(200).send({
        totalCount,
        allProducts,
      });
    } else {
      allProducts = await Products.find()
        .sort({ price: 1 })
        .select({ title: 1, _id: 0 });
      res.status(200).send(allProducts);
    }
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};
