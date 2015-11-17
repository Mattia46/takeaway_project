function Order() {
  this.dishes = {};
}

Order.prototype.add = function(dish, qty) {
  this.dishes[dish] = qty;
}
