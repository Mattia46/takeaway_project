var Menu = require('mongoose').model('Menu');

exports.create = function(req, res, next) {
    var menu = new Menu(req.body);
    menu.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(menu);
        }
    });
};

exports.list = function(req, res, next) {
    Menu.find({}, function(err, menu) {
        if (err) {
            return next(err);
        }
        else {
            res.json(menu);
        }
    });
};
