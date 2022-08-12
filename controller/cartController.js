const getCartModel = require("../model/cartModel");
const getUserModel = require("../model/userModel");

/* All Carts */
const getCarts = async (req, res) => {
  let carts = await getCartModel.getCarts();

  res.status(200).send(carts);
};

/* All BigCarts & BigUser*/
const getBigCarts = async (req, res) => {
  let carts = await getCartModel.getCarts();
  let users = await getUserModel.getUsers();

  let getAllBigCarts = carts.filter((bigCart) => {
    if (bigCart.products.length > 2) {
      let bigUser = users.find((userCart) => {
        return userCart.id === bigCart.userId;
      });
      bigCart.name = bigUser.name;
      return {
        user_Cart: bigCart,
      };
    }
  });
  res.status(200).send(getAllBigCarts);
};

/* Carts By ID */
const getCartByDate = async (req, res) => {
  let carts = await getCartModel.getCarts();
  let startDate = req.query.start;
  let endDate = req.query.end;

  let filterDate = carts.filter((cartDate) => {
    return cartDate.date >= startDate || cartDate.date <= endDate;
  });

  res.status(200).send(filterDate);
};

/* Cart By ID */
const getCartByID = async (req, res) => {
  let carts = await getCartModel.getCarts();
  const id = req.params.id;

  if (!carts[id - 1]) {
    res.status(400).send("ERROR: BAD REQUEST (ID NOT FOUND)");
  } else {
    res.status(200).send(carts[id - 1]);
  }
};

/* All Carts Or Place A Order */
const getCartOrder = async (req, res) => {
  let carts = await getCartModel.getCarts();
  let typeOrder = req.query.order;

  if (typeOrder !== undefined) {
    if (typeOrder === "desc") {
      carts.sort((a, b) => b.id - a.id);
      res.status(200).send(carts);
    } else if (typeOrder === "asc") {
      carts.sort((a, b) => a.id - b.id);
      res.status(200).send(carts);
    } else if (typeOrder !== String) {
      let filtro = carts.slice(typeOrder[0] - 1, typeOrder[1]);
      res.status(200).send(filtro);
    }
  } else {
    res.status(200).send(carts);
  }
};

const cartController = {
  getCarts,
  getBigCarts,
  getCartByID,
  getCartOrder,
  getCartByDate,
};

module.exports = cartController;
