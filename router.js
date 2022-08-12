const express = require("express");
const router = express.Router();
//requiero la carpeta Controller
const storeController = require("./controller/storeController");
const userController = require("./controller/userController");
const cartController = require("./controller/cartController");
//requiero middleware
const dates = require("./middleware/dates");
const errorHandler = require("./middleware/errorHandler");

/* Middleware */
router.use("/", [dates.myDate, dates.today, dates.month]);

/* Categories */
router.get("/store/products/categories/expensive", dates.requestDays, storeController.getProductsExpensive);
router.get("/store/products/categories/", dates.requestDays, storeController.getAllProductByCategory);
router.get("/store/products/categories/:categories", dates.requestDays, storeController.getProductByCategory);

/* Products */
router.get("/store/products/prices", dates.requestDays, storeController.getProductOrder);
router.get("/store/products/:id", dates.requestDays, storeController.getProductById);

/* Users */
router.get("/store/users", dates.requestDays, userController.getUsers);
router.get("/store/users/firsts", dates.requestDays, userController.get3Users);
//Limit results
//Sort results

/* Carts */
router.get("/store/carts/", dates.requestDays, cartController.getCartOrder);
router.get("/store/carts/date", dates.requestDays, cartController.getCartByDate);
router.get("/store/carts/:id", dates.requestDays, cartController.getCartByID);
router.get("/store/carts/bigcarts", dates.requestDays, cartController.getBigCarts);

/* Middleware */
router.use(errorHandler.notFound);

module.exports = router;

/*
<<< router >>>
    # Products: #
- All Products
http://localhost:3000/store/products/prices

- Products desc & asc:
http://localhost:3000/store/products/prices?order=desc << - >> http://localhost:3000/store/products/prices?order=asc

- Product Limit:
http://localhost:3000/store/products/prices?order=3 >> http://localhost:3000/store/products/prices?order=3&order=5

- Product By ID
http://localhost:3000/store/products/7

- All Products By Categories:
http://localhost:3000/store/products/categories/

- Products By Category:
http://localhost:3000/store/products/categories/electronics

    # Carts #
-All Carts:
http://localhost:3000/store/carts

- Order Carts:
http://localhost:3000/store/carts?order=4 << - >> http://localhost:3000/store/carts?order=3&order=5

-Order DESC & ASC:
http://localhost:3000/store/carts?order=desc << - >> http://localhost:3000/store/products/prices?order=asc

-Order By Date
http://localhost:3000/store/carts/date/?end=2020-01-01T00:00:02.000Z

-BigCarts
http://localhost:3000/store/carts/bigcarts

    # Users #
-All Users
http://localhost:3000/store/users

- Three First Users
http://localhost:3000/store/users/firsts
*/