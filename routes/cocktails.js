const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/movies'

// GET /movies (display all movies)
router.get('/', cocktailsCtrl.index);
// GET /movies/new (display a form for entering a new movie)
router.get('/new', ensureLoggedIn, cocktailsCtrl.new);
// GET /movies/:id (display a "detail/show" page for a single movie)
router.get('/:id', cocktailsCtrl.show);
// POST /movies (handle the new form being submitted)
router.post('/', ensureLoggedIn, cocktailsCtrl.create);

router.delete('/:id', ensureLoggedIn, cocktailsCtrl.delete)
module.exports = router;
