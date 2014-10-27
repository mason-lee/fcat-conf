/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new: function(req, res) {
		res.view();
	},

	create: function(req, res) {
		// Create a User with the parameters sent from 
		// the form
		/*
			Save all of user input
		 */
		User.create(req.params.all(), function UserCreated(err, user) {
			/*
				When there is an error, redirect the user to the submit page
			 */
			if(err) {
				res.redirect('/submit');
			}

			// Redirect to the index page once a user is 
			// successfully created
			req.flash('message', 'Thank you for your submission! The admins will review your submission before publishing.');
			res.redirect('/');
			res.end();
		

		/*
			Uploading image
		 */
		res.setTimeout(0);

		req.file('avatar').upload({
			adapter: require('skipper-s3'),
			bucket: 'fcat-images',
			/**
			 *  These keys should be hidden
			 */
			key: 'AKIAJ4BD3GPOXVPPONBQ', 
			secret: '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'
		}, function (err, uploadedFiles) {
			if(err) return res.send(500, err);
			return res.json({
				message: uploadedFiles.length + ' file(s) uploaded successfully!',
				files: uploadedFiles,
				textParams: req.params.all()
			});
		});
	});


	}
};

