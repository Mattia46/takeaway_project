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
    $('#listorder').html(function() {
      var string = '<ul>';
      $.each(order.dishes, function(name, qty) {
        string += "<li>" + name + " x" + qty + "</li>";
      });
      string += "</ul><p>TOTAL: " + order.total().toFixed(2);
      string += "<button id='order'>Place Order</button>";
      return string;
    });
  }

  function placeOrder() {
    console.log(order);
    var data = {
      username: "Username",
      items: order.dishes
    };
    $("#order").click(function(event) {
      if (loggedIn()) {
        $.ajax({url: '/orders',
                type: 'post',
                dataType: 'json',
                success: function (data) {
                $('#order').html("Order successful");
                },
                data: data
                // data: {"username":"Rajeev","items":{"pasta":[4,4.99],"curry":[3,5.99]}}
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
  }
});
