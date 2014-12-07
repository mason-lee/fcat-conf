/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    new: function(req, res) {
        res.view();
    }, //end new action

    create: function(req, res) {
        User.create(req.params.all(), function UserCreated(err, user) {
            if(err) {
                req.session.flash = { err: err }
                // If error redirect back to the sign-up page
                return res.redirect('/submit');
            }
            
            req.file('avatar').upload({ adapter: require("skipper-disk"), dirname: '../../assets/images' },function onUploadComplete (err, files) {             
                    if (err) return res.send(500, err);
                    else {
                        var imageFile = files[0].fd;
                        var filenameString = JSON.stringify(imageFile);
                        var n = filenameString.lastIndexOf("/");
                        var result = filenameString.substring(n+1).replace('"', '');
                        
                        User.update({id: user.id}, { avatar: '/images/'+ result }).exec(function(err, updated){
                            res.redirect("/");
                            req.flash('signup-message', '<div class="thankyou-message-wrapper bg-success"><span class="glyphicon glyphicon-remove pull-right" aria-hidden="true"></span><span class="thankyou-message">Thank you for submitting the form!<br> Our administer will review your submission and publish soon.</span></div>');
                        });
                    }
            });
        })//End User.create query
    }//End create action
};//End module.exports

