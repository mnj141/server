var express = require("express");
var router = express.Router();
router.get('/', function(req, res,next) {
let x = req.query.x;
let randVal = Math.random().toFixed(2);
let cosVal = Math.cos(randVal).toFixed(2);
let asinVal = Math.asin(randVal).toFixed(2);
let asinhVal = Math.asinh(randVal).toFixed(2);
if (x == undefined){
    x= randVal;

}
res.render("computation",{
  cosVal: `Math.cos() applied to ${x} is ${cosVal}`,
  asinVal: `Math.asin() applied to ${x} is ${asinVal}`,
  asinhVal: `Math.asinhVal() applied to ${x} is ${asinhVal}`,
});


});
module.exports = router;
