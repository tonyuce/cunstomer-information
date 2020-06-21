const Address = require("../models/address.model.js");

// Find a single Customer's address with a customerId
exports.findOne = (req, res) => {
  Address.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send([]);
        } else {
          res.status(500).send({
            message: "Error retrieving Address with customer id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };