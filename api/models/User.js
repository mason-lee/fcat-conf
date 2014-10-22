/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	// Allow us to save only the data that we wanted to the server
	schema: true,
	
	attributes: {
		status: {
			type: 'string',
			defaultsTo: 'pending'
		},

		firstName: {
			type: 'string'
		},

		lastName: {
			type: 'string'
		},

		email: {
			type: 'email',
			email: true
			// unique: true
		},

		phone: {
			type: 'integer'
		},

		credential: {
			type: 'string'
		},

		categories: {
			type: 'string'
		},

		imageUrl: {
			type: 'string'
		}

		// Strip out the information that is returned to the users
		// toJSON: function() {
		// 	var obj = this.toObject();
		// 	delete obj.categories;
		// 	delete obj.phone;
		// 	delete obj._csrf;
		// 	return obj;
		// }

	}
};

