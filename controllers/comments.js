const Cocktail = require('../models/cocktail');
//const { edit } = require('./cocktails');



module.exports = {

create,
delete: deleteComment,
edit,
update
}

function edit(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Cocktail.findOne({'comments._id': req.params.id}, function(err, cocktail) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const comment = cocktail.comments.id(req.params.id);
      // Render the comments/edit.ejs template, passing to it the comment
      res.render('comments/edit', {comment});
    });
  }

  function update(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Cocktail.findOne({'comments._id': req.params.id}, function(err, cocktail) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const commentSubdoc = cocktail.comments.id(req.params.id);
      // Ensure that the comment was created by the logged in user
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/cocktails/${cocktail._id}`);
      // Update the text of the comment
      commentSubdoc.text = req.body.text;
      // Save the updated book
      cocktail.save(function(err) {
        // Redirect back to the book's show view
        res.redirect(`/cocktails/${cocktail._id}`);
      });
    });
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





