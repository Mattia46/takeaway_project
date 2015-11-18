var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
});

mongoose.model('User', UserSchema);

var MenuSchema = new Schema({
    name: String,
    price: Number,
    ingredients: String,
    description: String,
});

mongoose.model('Menu', MenuSchema);
