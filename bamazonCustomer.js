var mysql = require("mysql");
var inquirer = require("inquirer");


///Connection params
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db",
  multipleStatements:true
});


///Establishing connection
connection.connect(function(err) {
  if (err) throw err;
  afterConnection();
});


///Searches for tables in the database and prints response
function afterConnection() {
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log(res);
    productSearch();
  });
}

///Inquirer asks user a set of questions, calculates a total price and runs a function that updates the quantity 
function productSearch() {
  inquirer.prompt([{
      name: "product",
      type: "input",
      message: "\nWhat is the ID of the product you would like to buy?",
      validate: function(value) {
        return ! isNaN(value);
      }
    }, {
      name: "units",
      type: "input",
      message: "\nHow many units of the product you would like to buy?",
      validate: function(value) {
        return ! isNaN(value);
      }
    }])
    .then(function(answer) {
      console.log("Answer: ", answer);
      var productId = "SELECT * FROM products WHERE id = ?";

      //Finding the product by ID 
      connection.query(productId, [answer.product], function(err, res) {

        if(err) throw err; 
        console.log("Res: ", res);

        //calculating the total cost
        var totalCost = parseInt(answer.units) * parseFloat(res[0].price);
          if (parseInt(res[0].stock_quantity) < parseInt(answer.units)) {
            console.log("\nInsufficient quantity! Please try again");
              productSearch();
          } else {
            console.log("\nYour total due is $" + totalCost);
            updateQuantity(answer, res);
          }
    });
  });
}


////This functions calculates how much of the product is left
function updateQuantity(answer, res) {

  var quantity;

  for (i=0; i < res.length; i++) {
     if (answer.product == res[i].id) {

         quantity = parseInt(res[i].stock_quantity);

         connection.query("UPDATE products SET ? WHERE id = ?"
            , [{stock_quantity: quantity - parseInt(answer.units)}
            , answer.product]
            , function(err, res) {
            if(err) throw err;
            console.log("\nProduct quantity is updated!\nThe new quantity for product id #" + answer.product, "is", quantity - parseInt(answer.units), "\n");
            } 
        ); 
    } 
  } 
} 