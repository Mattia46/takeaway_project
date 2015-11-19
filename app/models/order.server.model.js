var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema ({
  username: {type: String, required: true },
  items: {},
  ordertotal: Number,
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);
