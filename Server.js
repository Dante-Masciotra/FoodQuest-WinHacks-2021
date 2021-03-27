var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rest"
});

con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM options", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  
  var server = app.listen(5000, function () {
    console.log('Server is running..');
  });s