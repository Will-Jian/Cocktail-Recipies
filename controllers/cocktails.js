const Cocktail = require('../models/cocktail');


module.exports = {
  index,
  show,
  new: newCocktail,
  create,
  delete: deleteCocktail,
  //edit
};

function index(req, res) {
    Cocktail.find({}, function(err, cocktails) {
      res.render('cocktails/index', { title: 'All Cocktails', cocktails });
    });
  }

/*function edit (req,res){



}
*/

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


function deleteCocktail(res,req){
Cocktail.findOneAndDelete(
{_id: req.params.id, user: req.user._id}, function(err){
    res.redirect('/cocktails')
    }
   )
}
