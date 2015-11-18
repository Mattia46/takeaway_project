function Order(menu) {
  this.menu = menu;
  this.dishes = {};
}

Order.prototype.add = function(dish, qty) {
  var order = this.dishes;

  if (this.isInMenu(dish)) {
      if(order[dish]) { order[dish] += qty; }
      else { order[dish] = qty; }
  } else {
      throw new Error('Invalid dish');
  }
};

Order.prototype.total = function() {
  var total = 0;
  var order = this.dishes;
  var arrayOfDishes = this.menu.dishes;
  var orderItems = Object.keys(order);

  orderItems.forEach(function(orderItem){
    for(var menuItem in arrayOfDishes) {
      if(arrayOfDishes[menuItem].dish == orderItem)
      {
        total += arrayOfDishes[menuItem].price * order[orderItem] ;
      }
    }
  });

  return total;
};

Order.prototype.isInMenu = function(dish) {
  var arrayOfDishes = this.menu.dishes;
  for(var menuItem in arrayOfDishes) {
    if(arrayOfDishes[menuItem].dish === dish) {
      return true;
    }
  }
      return false;
};
