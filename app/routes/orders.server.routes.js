var orders = require('../../app/controllers/orders.server.controller');

module.exports = function(app) {
    app.route('/orders').post(orders.create).get(orders.list);
};
