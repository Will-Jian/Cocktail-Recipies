const Cocktail = require('../models/cocktail');



module.exports = {
create,
delete: deleteComment,
edit,
update
}



function edit(req, res) {
    Cocktail.findOne({'comments._id': req.params.id}, function(err, cocktail) {
      const comment = cocktail.comments.id(req.params.id);
      res.render('comments/edit', {comment});
    });
  }

  function update(req, res) {
    Cocktail.findOne({'comments._id': req.params.id}, function(err, cocktail) {
      const commentSubdoc = cocktail.comments.id(req.params.id);
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/cocktails/${cocktail._id}`);
        commentSubdoc.comment = req.body.comment;
        cocktail.save(function(err) {
        res.redirect(`/cocktails/${cocktail._id}`);
      });
    });
  }


function deleteComment(req,res,){
    Cocktail.findOne(
    {'comments._id': req.params.id, 'comments.user': req.user._id},
    function(err, cocktail) {
        if (!cocktail || err) return res.redirect(`/cocktails/${cocktail._id}`);
        cocktail.comments.remove(req.params.id);
        cocktail.save(function(err) {
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





