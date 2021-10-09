const { ObjectId } = require("mongodb");
const customer = require("../services/customer.service");

// Get all customers
exports.getAll = (req, res) => {
  customer.getAll(res);
};

// Create one customer
exports.createOne = (req, res) => {
  const { body } = req;
  customer.createOne(body, res);
};

// Get one customer
exports.getOne = (req, res) => {
  const { id } = req.params;
  customer.getOne(ObjectId(id), res);
};

// Update one customer
exports.updateOne = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  customer.updateOne(ObjectId(id), body, res);
};

// Login
exports.login = (req, res) => {
  const { body } = req;
  customer.login(body, res);
};

// Delete one customer
exports.deleteOne = (req, res) => {
  const { id } = req.params;
  customer.deleteOne(ObjectId(id), res);
};

// Delete all customers
exports.deleteAll = (req, res) => {
  customer.deleteAll(res);
};
