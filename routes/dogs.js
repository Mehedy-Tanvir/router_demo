const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All Dogs');
});
router.post('/', (req, res) => {
    res.send('Adding Dog');
});

router.get('/:id', (req, res) => {
    res.send('viewing one dog');
});
router.get('/:id/edit', (req, res) => {
    res.send('Editing One dog');
});
module.exports = router;