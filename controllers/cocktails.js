const Cocktail = require('../models/cocktail');


module.exports = {
  index,
  show,
  new: newCocktail,
  create,
  delete: deleteCocktail,
  edit,
  update
};

function index(req, res) {
    Cocktail.find({}, function(err, cocktails) {
      res.render('cocktails/index', { title: 'All Cocktails', cocktails });
    });
  }



function show(req, res) {
    Cocktail.findById(req.params.id, function(err, cocktail) {
        res.render('cocktails/show', { title: 'Cocktail Detail', cocktail,  });
    });
}

function newCocktail(req,res){
        res.render('cocktails/new', { title: 'Add Cocktail' });
}


function create(req,res){
    const cocktail = new Cocktail(req.body);
    cocktail.user = req.user._id;
    cocktail.save(function(err) {
        if (err) return res.redirect('/cocktails/new');
        res.redirect('/cocktails');
    });
}


function deleteCocktail(req,res){
Cocktail.findOneAndDelete(
{_id: req.params.id, user: req.user._id}, function(err){
    res.redirect('/cocktails')
    }
   )
}

function edit (req,res) {
    Cocktail.findOne({_id: req.params.id, user: req.user._id}, function(err, cocktail) {
        if (err || !cocktail) return res.redirect('/cocktails');
        res.render('cocktails/edit', {title: "edit cocktail", cocktail});
      });
}

function update(req, res) {
    Cocktail.findOneAndUpdate(
      {_id: req.params.id, userRecommending: req.user._id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, cocktail) {
        if (err || !cocktail) return res.redirect('/cocktails');
        res.redirect(`/cocktails/${cocktail._id}`);
      }
    );
  }