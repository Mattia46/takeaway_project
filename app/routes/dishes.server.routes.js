var dishes = require('../../app/controllers/dishes.server.controller');

module.exports = function(app) {
    app.route('/dishes').post(dishes.create).get(dishes.list);
};
