const express = require('express');
const controller = require('../controllers/customer.controller');

const router = express.Router();

// Get all customers
router.get('/', controller.getAll);

// Create one customer
router.post('/', controller.createOne);

// Delete all customers
router.delete('/', controller.deleteAll);

// Get one customer
router.get('/:id', controller.getOne);

// Update one customer
router.put('/:id', controller.updateOne);

// Login
router.post('/login', controller.login);

// Delete one customer
router.delete('/:id', controller.deleteOne);

module.exports = router;
