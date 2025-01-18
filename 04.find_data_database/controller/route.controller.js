const { dbModel } = require("../module/app.module");

exports.homeRoute = (req, res) => {
  res.send(`MongoDB Create and Read data from Database (productdb)`);
  res.end();
};

exports.sendData = async (req, res) => {
  try {
    const newData = new dbModel({
      title: req.body.title,
      price: req.body.price,
      desc: req.body.desc,
    });
    const saveData = await newData.save();
    res.send(saveData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.receiveData = async (req, res) => {
  try {
    const allDbData = await dbModel.find();
    res.send({
      successful: true,
      status: 200,
      data: allDbData,
    });
  } catch (error) {
    res.status(404).send(error.message);
    res.end();
  }
};

exports.receiveOneData = async (req, res) => {
  try {
    const id = req.params.id;
    const dbData = await dbModel.findOne({ _id: id });
    res.send({
      successful: true,
      status: 200,
      data: dbData,
    });
  } catch (error) {
    res.status(404).send(error.message);
    res.end();
  }
};
