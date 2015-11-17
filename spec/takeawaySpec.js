describe ('TakeAway', function(){

  var takeaway;
  var menu;
  var order;

  beforeEach (function(){
    menu = {'pasta': 4.99, 'polenta': 1.99};
    order = { dishes: function() {} };
    spyOn(order, 'dishes').and.returnValue({'pasta': 2});
    takeaway = new TakeAway(menu);
  });


  it('shows the menu', function(){
    expect(takeaway.show()).toBe(menu);
  });

  it('accepts an order', function() {
    takeaway.placeOrder('pasta', 2);
    expect(takeaway.order.dishes).toEqual({'pasta': 2});
  });
});
