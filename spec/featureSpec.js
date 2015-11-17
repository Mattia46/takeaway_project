describe ('TakeAway feature', function(){
    
  var takeaway;

  beforeEach (function(){
    takeaway = new Takeaway();
  });
  //as a user 
  //so that I can select a dish
  //I want to see the menu 
  it('shows the menu', function(){
    expect(takeaway.show()).not.toBe(null);
  });
});
