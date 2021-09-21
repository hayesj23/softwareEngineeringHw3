const { json } = require('express');
var express = require('express');
var router = express.Router();

var plain = {"topping":"plain", "quantity":"3"};
var cherry = {"topping":"cherry", "quantity":"5"};
var chocolate = {"topping":"chocolate", "quantity":"8"};
var orders = [plain, cherry, chocolate];
/* POST users listing. */
router.post('/', function(req, res, next) {
    var myOrders = JSON.stringify(orders);
    res.send(myOrders);
});

module.exports = router;
