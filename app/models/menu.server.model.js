var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MenuSchema = new Schema({
    name: String,
    price: Number,
    ingredients: String,
    description: String,
    picture: String
});

mongoose.model('Menu', MenuSchema);
