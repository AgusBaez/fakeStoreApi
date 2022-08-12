//Requiero de los datos..
const getStoreModel = require("../model/storeModel");

let getMappedProducts = async (req, _res) => {
  let products = await getStoreModel.getProducts();

  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
  }));

  return products;
};

const getProductOrder = async (req, res) => {
  let products = await getMappedProducts();
  let typeOrder = req.query.order;

  if (typeOrder !== undefined) {
    if (typeOrder === "desc") {
      products.sort((a, b) => b.price - a.price);
      res.status(200).send(products);
    } else if (typeOrder === "asc") {
      products.sort((a, b) => a.price - b.price);
      res.status(200).send(products);
    } else if (typeOrder !== String) {
      let filtro = products.slice(typeOrder[0] - 1, typeOrder[1]);
      res.status(200).send(filtro);
    }
  } else {
    res.status(200).send(products);
  }
};

const getProductsExpensive = async (req, res) => {
  const allCategory = await getStoreModel.getCategories();

  let getExpensive = allCategory.map(async (category) => {
    const getProductList = await getStoreModel.getByCategories(category);
    getProductList.sort((a, b) => b.price - a.price);
    return getProductList[0];
  });

  Promise.all(getExpensive).then((data) => {
    res.status(200).send(data);
  });
};

const getAllProductByCategory = async (req, res) => {
  const allCategory = await getStoreModel.getCategories();

  let productsByCategory = allCategory.map(async (category) => {
    return await getStoreModel.getByCategories(category);
  });

  Promise.all(productsByCategory).then((data) => {
    res.status(200).send(data);
  });
};

const getProductByCategory = async (req, res) => {
  let data = req.params.categories;
  let products = await getStoreModel.getProducts(data);

  let result = products.filter((product) => product.category.includes(data));
  if (result.length == 0) {
    res.status(400).send(`ERROR: BAD REQUEST(CATEGORY NOT FOUND)`);
  } else {
    res.status(200).send(result);
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  let products = await getMappedProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    rating: product.rating,
  }));

  if (!products[id - 1]) {
    res.status(400).send("ERROR: BAD REQUEST (ID NOT FOUND)");
  } else {
    res.status(200).send(products[id - 1]);
  }
};

const storeController = {
  getProductById,
  getProductOrder,
  getProductByCategory,
  getAllProductByCategory,
  getProductsExpensive,
};

module.exports = storeController;
