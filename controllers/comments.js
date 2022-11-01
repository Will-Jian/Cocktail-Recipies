const Cocktail = require('../models/cocktail');



module.exports = {

create,
delete: deleteComment
}

function deleteComment(req,res,){

    Cocktail.findOne(
{'comments._id': req.params.id, 'comments.user': req.user._id},
function(err, cocktail) {
        if (!cocktail || err) return res.redirect(`/cocktails/${cocktail._id}`);
        // Remove the subdoc (https://mongoosejs.com/docs/subdocs.html)
        cocktail.comments.remove(req.params.id);
        // Save the updated book
        cocktail.save(function(err) {
          // Redirect back to the book's show view
          res.redirect(`/cocktails/${cocktail._id}`);
        });
      }
    );
  }



function create(req, res) {
    Cocktail.findById(req.params.id, function(err,cocktail){
       req.body.user = req.user._id;
       req.body.userName = req.user.name;
     req.body.userAvatar = req.user.avatar;

        cocktail.comments.push(req.body);
        cocktail.save(function(err){
            res.redirect(`/cocktails/${cocktail._id}`)
        })
    })

}



/*
    req.body.cocktail = req.params.id 
  Comment.create(req.body, function (err, comment) {
    res.redirect(`/cocktails/${req.params.id}`);
  });
}


*/



/*
function newComment(req,res){
Comment.find({cocktail:req.params.id})
.exec(function (err, comments) {
    res.render('comments/new', {
      title: 'Add Comment',
     comments,
      commentId: req.params.id 
    });
  });


}

*/

