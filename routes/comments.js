const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.post('/cocktails/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);


router.get('/comments/:id/edit',ensureLoggedIn,commentsCtrl.edit)

router.put('/comments/:id',ensureLoggedIn,commentsCtrl.update)

module.exports = router;
