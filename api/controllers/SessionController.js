module.exports = {
	new: function(req, res) {
		debugger;
		res.locals.layout = 'layoutadmin';
		res.view();
	},

	index: function(req, res) {
		/*
			If the admin is not logged in. Block access to the page.
		 */
		if(!req.session.authenticated) {
			return res.redirect("/admin/login");
		}
	},

	create: function(req, res) {
		// Don't forget to move this to environmental variable
		if (req.param('password') === "password") {
			req.session.authenticated = true;
			res.redirect('/admin/submissions');
		} else {
			// Could redirect to page to show invalid login
			res.redirect("/admin/login");
			req.flash('message', '<div class="error-message-wrapper pull-right"><span class="error-message bg-danger">Your password is not correct.</span></div>');	
		}
	},

	destroy: function(req, res) {
		req.session.authenticated = false;
		res.send('logged out');
		res.redirect("/");
	}
};