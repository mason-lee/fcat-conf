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

	create: function  (req, res) {

		User.create(req.params.all(), function UserCreated(err, user) {
			if(err) {
				return res.redirect('/submit');
			}
		
			// Uploading image
			res.setTimeout(0);
			req.file('avatar').upload({
				adapter: require('skipper-s3'),
				bucket: 'fcat-images',
				key: 'AKIAJ4BD3GPOXVPPONBQ', 
				secret: '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',
				headers: {
					'x-amz-acl': 'public-read'
				}
			}, function (err, uploadedFiles) {
				// Maybe here just say image upload fail but otherwise success..
				// Ask them to email image to somewhere?
				if(err) return res.send(500, err);

				// Otherwise, update the user avatar
				User.update({id: user.id}, {avatar: uploadedFiles[0].extra.Location}).exec(function(err, updated) {
					// return res.json({success: 'ok all done'});
					res.redirect("/");
					req.flash('signup-message', '<div class="thankyou-message-wrapper bg-success"><span class="thankyou-message">Thank you for submitting the form!<br> Our administer will review your submission and publish soon.</span></div>');
				});
			});
		})//End User.create query
	}//End create action
};//End module.exports

