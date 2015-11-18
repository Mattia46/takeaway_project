function Order(menu) {
  this.menu = menu;
  this.dishes = {};
}

Order.prototype.add = function(dish, qty) {
  var order = this.dishes;

  if (this.isInMenu(dish)) {
      if (order[dish]) {
        order[dish] += qty;
      } else {
        order[dish] = qty;
      }
  } else {
      throw new Error('Invalid dish');
  }
};

Order.prototype.total = function() {
  var total = 0;
  var order = this.dishes;
  var menu = this.menu;


  Object.keys(order).forEach( function(key) {
    total += menu[key] * order[key];
  });

  return total;
};

Order.prototype.isInMenu = function(dish) {
  var basket = this.menu;
  for(var menuItem in basket) {
    if(menuItem === dish) {
      return true;
    }
  }
  return false;
};
