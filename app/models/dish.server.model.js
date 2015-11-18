var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DishSchema = new Schema({
    name: String,
    price: Number,
    ingredients: String,
    description: String,
    picture: String
});

mongoose.model('Dish', DishSchema);
