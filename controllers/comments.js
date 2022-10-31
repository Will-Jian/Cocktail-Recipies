const Cocktail = require('../models/cocktail');
const Comment = require('../models/comment');


module.exports = {
new: newComment,
create,
}





function create(req, res) {
    req.body.cocktail = req.params.id 
  Comment.create(req.body, function (err, comment) {
    res.redirect(`/cocktails/${req.params.id}`);
  });
}


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



