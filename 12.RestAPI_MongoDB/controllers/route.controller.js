const path = require("path");
const Users = require("../modules/db.module");

const homeRoute = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
};

const createUser = async (req, res) => {
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
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(501).send(`Server Error : ${error.message}`);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).send(allUsers);
    res.end();
  } catch (error) {
    res.status(501).send(`Server Error : ${error.message}`);
  }
};

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const oneUser = await Users.find(id);
    res.status(200).send(oneUser);
    res.end();
  } catch (error) {
    res.status(501).send(`Server Error : ${error.message}`);
  }
};

const updateUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age, gender, phone, email } = req.body;
    const updateUser = await Users.findByIdAndUpdate(
      { _id: id },
      {
        name,
        age,
        gender,
        phone,
        email,
      },
      { new: true }
    );
    res.status(200).send(updateUser);
    res.end();
  } catch (error) {
    res.status(501).send(`Server Error : ${error.message}`);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const delUser = await Users.findByIdAndDelete(id);
  res.status(200).send(delUser);
  res.end();
};

module.exports = {
  homeRoute,
  createUser,
  getAllUsers,
  getOneUser,
  updateUsers,
  deleteUser,
};
