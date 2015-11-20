describe('Order', function() {
  var order;
  var menu;

  beforeEach(function() {
    menu = {
            'pasta': 4.99,
            'curry': 5.99
           };

    order = new Order(menu);
  });

  describe('#add', function() {
    it('adds dish and quantity to the order', function() {
      order.add('pasta', 3);
      expect(order.dishes.pasta).toEqual([3, 4.99]);
    });

    it('adds multiple orders of the same dish', function() {
      order.add('curry', 3);
      order.add('curry', 4);
      expect(order.dishes.curry).toEqual([4, 5.99]);
    });

    it('does not allow you to add dishes that are not on the menu', function() {
      expect(function() { order.add('invalid item', 1);}).toThrow(new Error('Invalid dish'));
    });

  });

  describe('#total', function() {
    it('returns the total of the current order', function() {
      order.add('curry', 3);
      order.add('pasta', 2);
      expect(order.total()).toEqual(27.95);
    });
  });
});
