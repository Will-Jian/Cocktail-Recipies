const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');



// GET /tickers/new
router.get('/cocktails/:id/comments/new', commentsCtrl.new);
// POST /tickets
router.post('/cocktails/:id/comments', commentsCtrl.create);
// POST /flights/:id/tickets (assoc flight & ticket)


module.exports = router;
