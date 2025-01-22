const { dbModule } = require("../module/app.module");

exports.homeRoute = (req, res) => {
  res.send("<h1>find data using logical operators</h1>");
};

exports.sendData = async (req, res) => {
  try {
    const newProduct = new dbModule({
      title: req.body.title,
      price: req.body.price,
      rating: req.body.rating,
      desc: req.body.desc,
    });

    const saveProduct = await newProduct.save();
    res.status(200).send(saveProduct);
  } catch (error) {
    res.send(500).send("Internal Server Error");
  }
};

exports.getData = async (req, res) => {
  try {
    const price = req.query.price;
    const rating = req.query.rating;
    let productData;
    if (price && rating) {
      productData = await dbModule.find({
        $and: [{ price: { $gte: price } }, { rating: { $gte: rating } }],
      });
    } else if (price) {
      productData = await dbModule.find({ price: { $gte: price } });
    } else if (rating) {
      productData = await dbModule.find({ rating: { $gte: rating } });
    } else {
      productData = await dbModule.find();
    }
    res.status(200).send(productData);
  } catch (error) {
    res.status(404).send("Data not found");
  }
};
