const sql = require("./mysql.js");

// constructor
const Customer = function(customer) {
  this.first_name = customer.first_name;
  this.last_name = customer.last_name;
  this.age = customer.age;
  this.customer_id = customer.customer_id;
  this.gender = customer.gender;
  this.status = customer.status;
};

Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Customer;