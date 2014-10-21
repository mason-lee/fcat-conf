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
		User.create(req.params.all(), function UserCreated(err, user) {
			if(err) {
				console.log(err);
			}

			// Redirect to the index page once a user is 
			// successfully created
			res.redirect('/');
		});
	}
};

