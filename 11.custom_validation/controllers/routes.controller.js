const { Users } = require("../modules/db.module");

exports.homeRoute = (req, res) => {
  res.send("<h2>Schema Custom Validation</h2>");
  res.end();
};

exports.notFoundPage = (req, res, next) => {
  res.status(404).send("<h2>Page Not Found</h2>");
  res.end();
};

exports.sendUsers = async (req, res) => {
  try {
    const { name, age, gender, phone, email } = req.body;
    const newUser = new Users({
      name,
      age,
      gender,
      phone,
      email,
    });
    const saveUser = await newUser.save();
    res.status(200).send(saveUser);
  } catch (error) {
    internalError(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    if (allUsers) {
      res.status(200).send(allUsers);
    } else {
      res.status(400).send("No User Found");
    }
  } catch (error) {
    internalError(error);
  }
};

const internalError = (error) => {
  res.send(504).send(`<h2>Internal Server Error : ${error.message}</h2>`);
  res.end();
};
