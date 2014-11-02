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

	create: function  (req, res) {

		User.create(req.params.all(), function UserCreated(err, user) {
			if(err) {
				res.redirect('/submit');
			}
		
			// Uploading image
			res.setTimeout(0);
			req.file('avatar').upload({
				adapter: require('skipper-s3'),
				bucket: 'fcat-images',
				/**
				 *  These keys should be hidden
				 */
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
					return res.json({success: 'ok all done'});
				})
			});
		})
	}
};
	// create: function(req, res) {
	// 	debugger
	// 	var fs = require('fs');
	// 	fs.readFile(req.file('avatar').path, function (err, data) {
	// 	  var newPath = __dirname + "/uploads/uploadedFileName";
	// 	  fs.writeFile(newPath, data, function (err) {
	// 	    res.redirect("back");
	// 	  });
	// 	});
	// },

	// otherCreate: function(req, res) {

	// 	// Create a User with the parameters sent from 
	// 	// the form
	// 	/*
	// 		Save all of user input
	// 	 */
	// 	User.create(req.params.all(), function UserCreated(err, user) {
	// 		if(err) {
	// 			res.redirect('/submit');
	// 		}
		
	// 		// Uploading image
	// 		res.setTimeout(0);

	// 		res.json({avatar: req.file('avatar')});
	// 		res.end();
	// 		return;

	// 		req.file('avatar').upload({
	// 			adapter: require('skipper-s3'),
	// 			bucket: 'fcat-images',
	// 			/**
	// 			 *  These keys should be hidden
	// 			 */
	// 			key: 'AKIAJ4BD3GPOXVPPONBQ', 
	// 			secret: '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'
	// 		}, function (err, uploadedFiles) {
	// 			if(err) return res.send(500, err);
	// 			return res.json({
	// 				message: uploadedFiles.length + ' file(s) uploaded successfully!',
	// 				files: uploadedFiles,
	// 				textParams: req.params.all()
	// 			});
	// 		});
	// 	});
		// Redirect to the index page once a user is 
		// successfully created
		// req.flash('message', 'Thank you for your submission! The admins will review your submission before publishing.');
		// res.redirect('/');
		// res.end();


