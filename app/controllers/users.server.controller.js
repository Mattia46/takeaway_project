var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        }
        else {
            res.json(users);
        }
    });
};

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
