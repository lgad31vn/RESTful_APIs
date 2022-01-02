import express from 'express';
const router = express.Router();

import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
} from '../controllers/controllers';

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
  getContacts
);

// @route: GET /contact/:contactID
// @desc: test
// @access: PUBLIC
router.get('/:contactID', getContactWithID);

// @route: PUT /contact
// @desc: test
// @access: PUBLIC
router.post('/', addNewContact);

// @route: PUT /contact/:id
// @desc: test
// @access: PUBLIC
router.put('/:contactID', updateContact);

// @route: DELETE /contact/:id
// @desc: test
// @access: PUBLIC
router.delete('/:id', (req, res) => {
  res.send(`DELETE successful with id = ${req.params.id}`);
});

module.exports = router;
