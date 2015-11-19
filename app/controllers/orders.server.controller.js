 Order = require('mongoose').model('Order');

  exports.create = function(req, res, next) {
    var order = new Order(req.body);
    order.save(function(err) {
      if (err) {
        return next(err);
      }
      else {
        res.json(order);
      }
    });
  };

  exports.list = function(req,res, next) {
    Order.find( {}, function(err, order) {
      if (err) {
        return next(err);
      }
      else {
        res.json(order);
      }
    });
  };
