function TakeAway(menu,order){
  this.menu = menu;
  this.order = order || new Order();
}

TakeAway.prototype.jsonMenu = function(){
  return this.menu;
};

TakeAway.prototype.placeOrder = function(dish, qty) {
  this.order.add(dish, qty);
  this.order.total();
};
