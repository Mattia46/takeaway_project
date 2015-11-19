$(document).ready(function() {

  var menuList = {};
  var order = new Order(menuList);
  var test;

  $("#login").click(function(event) {

    alert("Thanks for visiting!");

  });

  getMenu();

  var populateOrder = function() {
      $('#listorder').html(function() {
        var string = '<ul>';
        Object.keys(order.dishes).forEach(function(dish) {
          string += "<li>" + dish + " x" + order.dishes[dish] + "</li>";
        });
        string += "</ul><p>TOTAL: " + order.total().toFixed(2);
        string += "<button>Place Order</button>";
        return string;
      });
  };

function getMenu() {
  var getMenuList = $.getJSON("/dishes");
  getMenuList.then(function(menu) {
    console.log(menu);
    menu.forEach(function(dish) {
      //menuList[dish.name] = dish.price;
      populateMenu(dish.name, dish.price);
    });
  });


}

  var basketContent = function() {
    if (order.dishes === {}) {
      return "No items in basket.";
    } else {
      populateOrder();
    }
  };

  function populateMenu(name, price) {
    $('#menu').append(name + " " + price);
    // for(var dish in menu) {
      // $('#listmenu').append("<li><button id='" + name + "'>+</button> " + name + ": £" + price + "</li> ");
      // $('#menu').append('<ul id="listmenu"></ul>');
    // }
  }

  //   getMenu();
  // populateMenu();
  //

// order.add(this.id, 1);
// $("#listmenu button").click(function(event) {
//
});
