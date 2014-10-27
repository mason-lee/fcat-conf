module.exports = {
	new: function(req, res) {
		/**
		 * Use a different layout
		 * Tutorial is here - http://lift.pressmist.com/use-different-layout-sails-js
		 */
		res.locals.layout = 'layoutadmin';
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
			res.send("<p class='bg-danger'>The password is invalid.</p>");
		}
	},

	destroy: function(req, res) {
		req.session.authenticated = false;
		res.send('logged out');
		res.redirect("/");
	}
};