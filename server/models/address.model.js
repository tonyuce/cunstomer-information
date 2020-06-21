const sql = require("./mysql.js");

// constructor
const Address = function(address) {
  this.customer_id = address.customer_id;
  this.address = address.address;
  this.status = address.status;
};

Address.findById = (customerId, result) => {
  sql.query(`SELECT * FROM  address WHERE customer_id = ${customerId} and status = 1`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Address of customer: ", res[0]);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


module.exports = Address;