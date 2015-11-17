describe ('TakeAway', function(){

  var takeaway;
  var menu;
  var order;
  var printedMenu;

  beforeEach (function(){
    menu = {'menu': [{'dish': 'pasta', 'price': 4.99}]};
    order = { add: function() {}, total: function() {}};
    spyOn(order, 'add');
    spyOn(order, 'total');
    takeaway = new TakeAway(menu,order);
  });


  it('shows the menu and prices', function(){
    expect(takeaway.jsonMenu()).toEqual(menu);
  });

  it('accepts an order', function() {
    takeaway.placeOrder('pasta', 2);
    expect(takeaway.order.add).toHaveBeenCalled();
  });
  it('knows the order total', function() {
    takeaway.placeOrder('pasta', 2);
    expect(takeaway.order.total).toHaveBeenCalled();
  });
});
