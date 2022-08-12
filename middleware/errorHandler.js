const notFound = (req, res, _next) => {
  res.status(404).send("NOT FOUND (404)");
  //PODRIA REDIRRECCIONAR A UN VIEW 404 (MVC)
};

let errors = {
  notFound,
};

module.exports = errors;
