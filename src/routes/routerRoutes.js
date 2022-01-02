import express from 'express';
const router = express.Router();

import { addNewContact } from '../controllers/controllers';

// @route: GET /contact
// @desc: test
// @access: PUBLIC
router.get(
  '/',
  (req, res, next) => {
    console.log(`Req from: ${req.originalUrl}`);
    console.log(`Req type: ${req.method}`);
    next();
  },
  (req, res) => {
    res.send('GET request successful!');
  }
);

// @route: PUT /contact
// @desc: test
// @access: PUBLIC
router.post('/', addNewContact);

// @route: PUT /contact/:id
// @desc: test
// @access: PUBLIC
router.put('/:id', (req, res) => {
  res.send(`PUT request sucessful with id = ${req.params.id}`);
});

// @route: DELETE /contact/:id
// @desc: test
// @access: PUBLIC
router.delete('/:id', (req, res) => {
  res.send(`DELETE successful with id = ${req.params.id}`);
});

module.exports = router;
