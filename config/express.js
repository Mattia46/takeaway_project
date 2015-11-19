var config = require('./config'),
    express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    flash = require('connect-flash');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/dishes.server.routes.js')(app);
    require('../app/routes/orders.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};
