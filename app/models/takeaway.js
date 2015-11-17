function TakeAway(menu){
  this.menu = menu; 
  this.order = new Order();
}

TakeAway.prototype.show = function(){
  return this.menu;
};

TakeAway.prototype.placeOrder = function(dish, qty) {
  this.order.add(dish, qty);
};
