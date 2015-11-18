var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema ({
  dishes: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Dish'}, {"quantity": Number} ],
  user: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User'}]

});

mongoose.model('Order', OrderSchema);
