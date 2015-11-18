var Dish = require('mongoose').model('Dish');

exports.create = function(req, res, next) {
    var dish = new Dish(req.body);
    dish.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(dish);
        }
    });
};

exports.list = function(req, res, next) {
    Dish.find({}, function(err, dish) {
        if (err) {
            return next(err);
        }
        else {
            res.json(dish);
        }
    });
};
