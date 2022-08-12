function myDate(req, res, next) {
  req.date = new Date();
  next();
}

function today(req, res, next) {
  req.today = req.date.getDay();
  next();
}

function month(req, res, next) {
  req.month = req.date.getMonth() + 1;
  next();
}

let requestDays = (req, _res, next) => {
  let todayDays = `New request - ${req.method} - in ${req.url} on day: ${
    req.today + " of " + req.month
  } `;
  console.log(todayDays);
  next();
};

let dates = {
  myDate,
  today,
  month,
  requestDays,
};

module.exports = dates;
