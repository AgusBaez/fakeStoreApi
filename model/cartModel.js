const express = require("express");

//"""""Conexion a la base de datos"""""
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function getCarts() {
  const res = await fetch("https://fakestoreapi.com/carts");
  return await res.json();
}

let carts = {
  getCarts,
};

module.exports = carts;
