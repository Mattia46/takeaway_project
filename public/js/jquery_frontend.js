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
    placeOrder();
  });

  function addOrder() {
    $("#listmenu button").click(function(event) {
      order.add(this.id, 1);
      writeOrder();
      event.preventDefault();
    });
  }

  function writeOrder() {
    $('p#basket').text('');
    $('ul#listorder').html(function() {
      var string = '';
      $.each(order.dishes, function(name, qty) {
        string += "<li>" + name + " x" + qty + "</li>";
      });
      string += "<p>TOTAL: " + order.total().toFixed(2);
      string += "<button>Place Order</button>";
      return string;
    });
  }

  function placeOrder() {
    $("#order_container").click(function(event) {
      var data = {
                  username: "Username",
                  items: order.dishes,
                  ordertotal: order.total().toFixed(2)
                  };
      if (loggedIn()) {
        $.ajax({url: '/orders',
               type: 'post',
               dataType: 'json',
               success: function (data) {
                 $('ul#listorder').html("Order successful");
               },
               data: data
        });
      } else {
        alert("Please Log In");
      }
    });
  }

  function loggedIn() {
    return true;
  }

  function writeMenu(menu) {
    $('#menu').append('<ul id="listmenu"></ul>');
    for(var dish in menu ) {
      $('#listmenu').append("<li><button id='" + dish + "'>+</button> " +
                            dish +": £" + menu[dish] + "</li> ");
    }
    $('p#basket').text('No items in your basket');
  }
});
