const { Products } = require("../modules/app.module");

exports.homeRoute = (req, res) => {
  res.send("<h2>Create, Read, Delete data from MongoDB database</h2>");
  res.end();
};

exports.sendData = async (req, res) => {
  try {
    const newData = new Products({
      title: req.body.title,
      price: req.body.price,
      rating: req.body.rating,
      desc: req.body.desc,
    });
    const saveData = await newData.save();
    res.status(201).send(saveData);
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
    process.end(1);
  }
};

exports.getData = async (req, res) => {
  try {
    const price = req.query.price;
    const rating = req.query.rating;
    let allData;
    if (price && rating) {
      allData = await Products.find(
        $and[({ price: { gte: price } }, { rating: { gte: rating } })]
      );
      res.status(200).send(allData);
    } else if (price) {
      allData = await Products.find({ price: { gte: price } });
      res.status(200).send(allData);
    } else if (rating) {
      allData = await Products.find({ rating: { gte: rating } });
      res.status(200).send(allData);
    } else {
      allData = await Products.find();
      res.status(200).send(allData);
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
    process.end(1);
  }
};

exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await Products.findByIdAndDelete(id);
    if (!deleteData) {
      res.status(404).send("Data not found");
    } else {
      res.status(200).send("Data deleted successfully");
      res.send(await Products.find());
    }
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
    process.end(1);
  }
};
