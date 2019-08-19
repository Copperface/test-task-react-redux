const
  express = require('express'),
  request = require('request'),
  PORT = process.env.PORT || 5000;

let app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  next();
});

app.use('/api', function (req, res) {
  req.pipe(request("http://example.spider.ru/api" + req.url)).pipe(res);
});

let server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));