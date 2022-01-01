import express from 'express';
const router = express.Router();

// @route: GET /contact
// @desc: test
// @access: PUBLIC
router.get('/', (req, res) => {
  res.send('GET request successful!');
});

// @route: PUT /contact
// @desc: test
// @access: PUBLIC
router.post('/', (req, res) => {
  res.send('POST request successful!');
});

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
