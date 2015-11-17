describe ('TakeAway features', function(){

    var takeaway;
    var menu;
    var order;

    beforeEach (function(){
      menu = {'gnocchi': 4.99, 'polenta': 1.99};
      takeaway = new TakeAway(menu);
    });
  //as a user
  //so that I can select a dish
  //I want to see the menu
  it('shows the menu', function(){
    expect(takeaway.show()).toEqual(menu);
  });

  // as a user
  // so that I can get a wonderful dish
  // I want to place an order
  it('can place an order', function(){
    takeaway.placeOrder('gnocchi', 7);
    expect(takeaway.order.dishes).toEqual({'gnocchi': 7});
  });
});
