const Cocktail = require('../models/cocktail');


module.exports = {
  index,
  show,
  new: newCocktail,
  create
};

function index(req, res) {
    Cocktail.find({}, function(err, cocktails) {
      res.render('cocktails/index', { title: 'All Cocktails', cocktails });
    });
  }
  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        T
            res.render('cocktails/show', { title: 'Cocktail Detail', flight,  });
          });
    
    }

    function newCocktail(req,res){
        res.render('cocktails/new', { title: 'Add Cocktail' });
        
        }


    function create(req,res){
    
            for (let key in req.body){
                 if (req.body[key] === '') delete req.body[key];
            } 
         
         
             const cocktail = new Cocktail(req.body);
             cocktail.save(function(err) {
               // if we don't redirect, the new page will be shown
               // with /movies in the address bar
               if (err) return res.redirect('/cocktails/new');
               
               // for now, redirect right back to new.ejs
               res.redirect('/cocktails');
             });
             }