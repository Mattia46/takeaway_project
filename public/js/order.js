function Order(menu) {
  this.menu = menu;
  this.dishes = {};
}

Order.prototype.add = function(dish, qty) {
  var order = this.dishes;

  if (this.isInMenu(dish)) {
      if (order[dish]) {
        order[dish][0]++;
      } else {
        order[dish] = [qty, this.menu[dish]];
      }
  } else {
      throw new Error('Invalid dish');
  }
};

Order.prototype.total = function() {
  var total = 0;
  var order = this.dishes;
  var menu = this.menu;


  Object.keys(order).forEach( function(name) {
    total += order[name][0] * order[name][1];
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
