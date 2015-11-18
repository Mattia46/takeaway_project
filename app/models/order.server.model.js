var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema ({
  username: {type: String, required: true },
  item: {
    dish: {type: String, required: true },
    quantity: {type: Number, required: true },
    created_at: {type: Date, default: Date.now }
  }
});

mongoose.model('Order', OrderSchema);
