module.exports = {
	new: function(req, res) {
		res.view();
	},

	create: function(req, res) {
		// Move this to an environment variable!
		if (req.param('password') === "PASSWORD") {
			req.session.authenticated = true;
			// res.send('logged in!');
			res.redirect('/admin/submissions');
		} else {
			// Could redirect to page to show invalid login
			res.redirect("/admin/login");
			/*
				todo: Show error message
			 */
			


			// res.send('Invalid password: ' + req.param('password'));
			res.send('Invalid password. Please try again.');

		}
	},

	destroy: function(req, res) {
		req.session.authenticated = false;
		res.send('logged out')
	}
};