module.exports = app => {
    const address = require("../controllers/address.controller.js");
   
    // Retrieve a single Customer Address with customerId
    app.get("/address/:customerId", address.findOne);
      
  };