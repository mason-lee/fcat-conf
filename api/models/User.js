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
			type: 'email'
		},

		location: {
			type: 'string'
		},

		avatar: {
			type: 'string'
		},

		categories: {
			type: 'string'
		},

		portfolio: {
			type:'string'
		},

		credential: {
			type: 'string'
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
		},

		shareFcat: {
			type: 'boolean'
		}
	}
};

