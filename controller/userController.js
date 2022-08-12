const getUserModel = require("../model/userModel");

/* USERS */
let getUsers = async (req, res) => {
  let users = await getUserModel.getUsers();
  res.status(200).send(users);
};

let get3Users = async (req, res) => {
  let users = await getUserModel.get3Users();

  res.status(200).send(users);
};

const storeController = {
  getUsers,
  get3Users,
};

module.exports = storeController;
