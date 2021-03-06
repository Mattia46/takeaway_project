describe ('TakeAway features', function(){

  var takeaway;
  var menu;
  var order;

  beforeEach (function(){
    menu = {
            pasta: 4.99,
            curry: 5.99
          };

    takeaway = new TakeAway(menu);
  });
  //as a user
  //so that I can select a dish
  //I want to see the menu
  it('shows the menu', function(){
    expect(takeaway.jsonMenu()).toEqual(menu);
  });

  // as a user
  // so that I can get a wonderful dish
  // I want to place an order
  it('can place an order', function(){
    takeaway.placeOrder('pasta', 7);
    expect(takeaway.order.dishes).toEqual({'pasta':[ 7, 4.99]});
  });
  it('check total cost of order', function() {
    takeaway.placeOrder('pasta', 7);
    expect(takeaway.order.total()).toEqual(34.93);
  });
});
