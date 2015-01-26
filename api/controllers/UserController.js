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
		console.log('called outer 1');
		var https = require('https');
		var testVar = 'aa'; 

		verifyRecaptcha(req.body["g-recaptcha-response"], function(success) {
			console.log(success);
			if (success) {
				console.log("CAPTCHA Successful!!");

				User.create(req.params.all(), function UserCreated(err, user) {
					if(err) {
						// return res.send(500, err);
						// If error redirect back to the sign-up page
						return res.redirect('/submit');
						console.log("You passed the captcha test but failed with creating a user.");
					}

					req.file('avatar').upload({ adapter: require("skipper-disk"), dirname: '../../assets/images' },function onUploadComplete (err, files) {             
							if (err) return res.send(500, err);
							else {
								console.log("You are finally here. The image is uploaded.");

								var imageFile = files[0].fd;
								var filenameString = JSON.stringify(imageFile);
								var n = filenameString.lastIndexOf("/");
								var result = filenameString.substring(n+1).replace('"', '');
								
								User.update({id: user.id}, { avatar: '/images/'+ result }).exec(function(err, updated){
									res.redirect("/success");
								});//Update avatar
							}//End avatar else
					});//End req.file('avatar')
				});//End User.create query
			} else {
				console.log("Captcha failed.");
				res.end("Captcha failed, sorry.");
				// Restore the users' inputs
				return res.redirect("/submit");
			}
		});

		console.log('called outer2');
		var testVar = 'aa'; 

		// Helper function to make API call to recatpcha and check response
		function verifyRecaptcha(key, callback) {
			console.log('called inner1');

			console.log(testVar);
			var SECRET = '6Ley4gATAAAAAObNIlUphyfjRBBGumie7OztD8Jt';

			var reqUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET + "&response=" + key;
			console.log(reqUrl);

			https.get(reqUrl, function(res) {
				var data = "";
				res.on('data', function (chunk) {
					data += chunk.toString();
					console.log('d1: %s', data);
				});
				res.on('end', function() {
					try {
						console.log('d2: %s', data);
						var parsedData = JSON.parse(data);
						callback(parsedData.success);
					} catch (e) {
						callback(false);
					}
				});
			});
		}
		
		

		




	}//End Create Action
};//End module.exports

