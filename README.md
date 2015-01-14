# Website for "We Are FCAT" initiative

## Requirements

- [Sails.js](http://sailsjs.org/) >= 0.10.4
- Node >= 0.10.x
- Redis >= 1.4.5 (The version is specified here because 2.0.0 doesn't seem to work with the current version of the Sails)

## Setup

1. Clone the repository and run `npm install` to install the dependencies 
2. Set up your MongoDB settings `config/connections.js`
2. Change the connection used for models in the production environment to `productionMongoHqDb` in `config/env/production.js`
3. From the Redis url`redis://database-name:long-password-here@url.to.the.database.com:port/`, set host, port, db and pass values in `config/sessions.js` and `config/socket.js` within `export` object
4. In `config/local.js`, local environment uses the memory store so that we can still run our app in development
5. Start Sails with `sails lift`
6. Open `http://localhost:1337` in your browser
