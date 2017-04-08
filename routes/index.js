var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./public/index.html', function(err, data){
  res.write(data);
  res.end();
  });
});

module.exports = router;
