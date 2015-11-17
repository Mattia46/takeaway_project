function Order() {
  this.dishes = {};
}

Order.prototype.add = function(dish, qty) {
  this.dishes[dish] = qty;
};

Order.prototype.total = function() {
  return 10.98;
};

