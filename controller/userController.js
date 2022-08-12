const getUserModel = require("../model/userModel");

//Obtener todos los usuarios
let getUsers = async (req, res) => {
  let users = await getUserModel.getUsers();
  res.status(200).send(users);
};

//Obtener unicamente 3 usuarios
let get3Users = async (req, res) => {
  let users = await getUserModel.get3Users();

  res.status(200).send(users);
};

const storeController = {
  getUsers,
  get3Users,
};

module.exports = storeController;
