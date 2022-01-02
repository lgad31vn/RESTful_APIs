import express from 'express';
const router = express.Router();

import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from '../controllers/controllers';

// @route: GET /contact
// @desc: test
// @access: PUBLIC
router.get('/', getContacts);

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
router.delete('/:contactID', deleteContact);

module.exports = router;
