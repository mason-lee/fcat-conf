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
			Uploading image
		 */
		// var file = req.file('uploadFile').;

		// if (file) {
		// 	res.send(file);
		// }  else {
		// 	res.send('no file')
		// }
		// return;
		// if (req.file )
		// res.send(req.file('uploadFile')._files[0].stream.filename);
		// return;
		// 
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



		User.create(req.params.all(), function UserCreated(err, user) {
			if(err) {
				console.log(err);
			}

			// Redirect to the index page once a user is 
			// successfully created
			// res.redirect('/');
		});
	}
};

