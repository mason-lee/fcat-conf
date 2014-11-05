/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	// Allow us to save only the data that we wanted to the server
	// schema: true,
	// autoPK: false,

	attributes: {
		status: {
			type: 'string',
			defaultsTo: 'pending'
		},

		firstName: {
			type: 'string',
			required: true
		},

		lastName: {
			type: 'string',
			required: true
		},

		email: {
			type: 'email',
			email: true,
			unique: true
			// required: true
		},

		location: {
			type: 'string'
		},

		avatar: {
			type: 'string'
		},

		categories: {
			type: 'string'
			// required: true
		},

		portfolio: {
			type:'string'
		},

		credential: {
			type: 'string'
			// required: true
		},

		company: {
			type: 'string'
		},

		position: {
			type: 'string'
		},
	
		responsibility: {
			type: 'string'
		},

		love: {
			type: 'string'
		},

		failure: {
			type: 'string'
		},

		wish: {
			type: 'string'
		},

		wisdom: {
			type: 'string'
		},

		share: {
			type: 'boolean'
		}
	}
};

