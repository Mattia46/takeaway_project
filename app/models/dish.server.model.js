var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DishSchema = new Schema({
    name: {type: String, required: true },
    price: {type: Number, required: true },
    ingredients: String,
    description: String,
    picture: String
});

mongoose.model('Dish', DishSchema);
