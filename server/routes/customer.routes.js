module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
    // Retrieve all Customers
    app.get("/customers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/customers/:customerId", customers.findOne);
      
  };