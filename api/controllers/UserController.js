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
            
             // Upload to S3
            // res.setTimeout(0);
            // req.file('avatar').upload({
            //     adapter: require('skipper-s3'),
            //     bucket: process.env.S3_BUCKET,
            //     key: process.env.S3_KEY,
            //     secret: process.env.S3_SECRET,
            //     headers: {
            //         'x-amz-acl': 'public-read'
            //     }
            // }, function (err, uploadedFiles) {
            //     if(err) return res.send(500, err);
            //     // Otherwise, update the user avatar
            //     User.update({id: user.id}, {avatar: uploadedFiles[0].extra.Location}).exec(function(err, updated) {
            //         res.redirect("/success");
            //     });
            // });

            req.file('avatar').upload({ adapter: require("skipper-disk"), dirname: '../../assets/images' },function onUploadComplete (err, files) {             
                    if (err) return res.send(500, err);
                    else {
                        var imageFile = files[0].fd;
                        var filenameString = JSON.stringify(imageFile);
                        var n = filenameString.lastIndexOf("/");
                        var result = filenameString.substring(n+1).replace('"', '');
                        
                        User.update({id: user.id}, { avatar: '/images/'+ result }).exec(function(err, updated){
                            res.redirect("/success");
                        });
                    }
            });
        })//End User.create query
    }//End create action
};//End module.exports

