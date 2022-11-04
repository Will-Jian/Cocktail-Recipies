const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', cocktailsCtrl.index);

router.get('/new', ensureLoggedIn, cocktailsCtrl.new);

router.get('/:id', cocktailsCtrl.show);

router.post('/', ensureLoggedIn, cocktailsCtrl.create);

router.delete('/:id', ensureLoggedIn, cocktailsCtrl.delete)


router.get('/:id/edit',ensureLoggedIn,cocktailsCtrl.edit)

router.put('/:id',ensureLoggedIn,cocktailsCtrl.update)


module.exports = router;