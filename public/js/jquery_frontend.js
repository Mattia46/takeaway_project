$( document ).ready(function() {

  var menu = {};
  var order = new Order(menu);

    $( "#login" ).click(function( event ) {

        alert( "Thanks for visiting!" );

    });

  $.getJSON("/dishes", function(res) {
    $('#menu').append('<ul id="listmenu"></ul>');
     res.forEach(function(dish) {
      makeMenu(dish);
      $('#listmenu').append("<li><button id='" +dish.name+ "'>+</button> " + dish.name +": £" + dish.price+"</li> ");
    });
     populateOrder();
  });

  var makeMenu = function(dish) {
    menu[dish.name]=dish.price;
  };

  var populateOrder = function() {
    $("#listmenu button").click(function(event) {
      order.add(this.id,1);
      $('#listorder').html(function() {
        var string = '<ul>';
        Object.keys(order.dishes).forEach(function(dish) {
          string += "<li>" + dish + " x" + order.dishes[dish] + "</li>";
        });
        string += "</ul><p>TOTAL: " + order.total().toFixed(2);
        string += "<button>Place Order</button>";
        return string;
      });
      event.preventDefault();
    });
  };



});
