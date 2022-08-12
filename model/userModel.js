const express = require("express");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function getUsers() {
  const res = await fetch("https://fakestoreapi.com/users/");
  return await res.json();
}

async function get3Users() {
  const res = await fetch("https://fakestoreapi.com/users/?limit=3");
  return await res.json();
}

let users = {
  getUsers,
  get3Users,
};

module.exports = users;
