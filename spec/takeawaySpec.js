describe ('TakeAway', function(){

  var takeaway;
  var menu;

  beforeEach (function(){
    menu = {'pasta': 4.99, 'polenta': 1.99};
    takeaway = new TakeAway(menu);
  });

  it('shows the menu', function(){
    expect(takeaway.show()).toBe(menu);
  });
});
