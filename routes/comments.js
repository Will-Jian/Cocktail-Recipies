const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');



// GET /tickers/new
//router.get('/cocktails/:id/comments/new', commentsCtrl.new);
// POST /tickets
router.post('/cocktails/:id/comments', ensureLoggedIn, commentsCtrl.create);
// POST /flights/:id/tickets (assoc flight & ticket)
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;
