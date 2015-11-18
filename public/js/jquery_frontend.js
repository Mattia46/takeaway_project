$( document ).ready(function() {

  var menu = {};
  var order;

    $( "#login" ).click(function( event ) {

        alert( "Thanks for visiting!" );

    });

  $.getJSON("/dishes", function(res) {
    $('#menu').append('<ul id="listmenu"></ul>');
     res.forEach(function(dish) {
      makeMenu(dish);
      $('#listmenu').append("<li><button id='" +dish.name+ "'>+</button> " + dish.name +": £" + dish.price+"</li> ");
    });
     order = new Order(menu);
     test();
  });

  var makeMenu = function(dish) {
    menu[dish.name]=dish.price;
  };

  var test = function() {
    $("#listmenu button").click(function(event) {
      $('#listorder').append("<li>" + this.id +"</li>");
      order.add(this.id,1);
      console.log(order.dishes);
      console.log(order.total());
      event.preventDefault();
      console.log((this.id));
      console.log(menu);
    });
  };



});