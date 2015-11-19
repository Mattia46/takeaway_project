$( document ).ready(function() {

  var menu = {};
  var order = new Order(menu);

  $( "#login" ).click(function( event ) {

    alert( "Thanks for visiting!" );

  });

  $.getJSON("/dishes", function(data) {
    $.each(data, function(index, dish) {
      menu[dish.name] = dish.price;
    });

    writeMenu(menu);
    addOrder();            
  });

  function addOrder() {
    $("#listmenu button").click(function(event) {
      order.add(this.id, 1);
      writeOrder();
      event.preventDefault();
    });
  }

  function writeOrder() {
    $('#listorder').html(function() {
      var string = '<ul>';
      $.each(order.dishes, function(name, qty) {
        string += "<li>" + name + " x" + qty + "</li>";
      });
      string += "</ul><p>TOTAL: " + order.total().toFixed(2);
      string += "<button>Place Order</button>";
      return string;
    });
  }

  function writeMenu(menu) {
    $('#menu').append('<ul id="listmenu"></ul>');
    for(var dish in menu ) {
      $('#listmenu').append("<li><button id='" + dish + "'>+</button> " + 
                             dish +": £" + menu[dish] + "</li> ");
    }
  }
});
