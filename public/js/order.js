function Order(menu) {
  this.menu = menu;
  this.dishes = {};
}

Order.prototype.add = function(dish, qty) {
  var order = this.dishes;

  if(order[dish]) { order[dish] += qty; }
  else { order[dish] = qty; }
};

Order.prototype.total = function() {
  var total = 0;
  var order = this.dishes;
  var menu = this.menu.dishes;
  var orderItems = Object.keys(order);

  orderItems.forEach(function(orderItem){
    for(var menuItem in menu) {
      if(menu[menuItem].dish == orderItem)
      {
        total += menu[menuItem].price * order[orderItem] ;
      }
    }
  });

  return total;
};
