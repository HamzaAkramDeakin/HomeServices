const Customer = require("../models/Customer");

// Get all Customers
exports.getAll = async (res) => {
  try {
    const result = await Customer.find().sort({ name: 1 });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Create one Customer
exports.createOne = async (body, res) => {
  try {
    const result = await Customer.create(body);
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Get one Customer
exports.getOne = async (id, res) => {
  try {
    const result = await Customer.findOne({ _id: id });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Update one Customer
exports.updateOne = async (id, body, res) => {
  try {
    const result = await Customer.updateOne({ _id: id }, { $set: body });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

//Login
exports.login = async (body, res) => {
  try {
    const result = await Customer.findOne({
      email: body.email,
      password: body.password,
    });
    if (!result) {
      return res.status(401).json({ error: "Incorrect credentials" });
    } else {
      res.json(result);
    }
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Delete one Customer
exports.deleteOne = async (id, res) => {
  try {
    const result = await Customer.deleteOne({ _id: id });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Delete all Customers
exports.deleteAll = async (res) => {
  try {
    const result = await Customer.deleteMany();
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};
