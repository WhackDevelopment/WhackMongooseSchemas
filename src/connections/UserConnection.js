/**********************************************************************/
'use strict'; // https://www.w3schools.com/js/js_strict.asp
/**********************************************************************/

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**********************************************************************/

const { flake } = require('..');

/**********************************************************************/

const UserConnectionSchema = new Schema(
    {
        id: { type: String, unique: true, required: true, index: true, default: () => flake.gen() },
        name: { type: String, required: true },
        username: { type: String, required: true },
        connected_email: { type: String, required: true },
        refresh_token: { type: String, required: true },
        oauth2_token: { type: String, required: true }
    },
    { collection: process.env.MONGODB_USER_CONNECTIONS_COLLECTION || 'connections', timestamps: true }
);

/**********************************************************************/

UserConnectionSchema.path('id');

/**********************************************************************/

module.exports = mongoose.models.UserConnection || model('UserConnection', UserConnectionSchema);

/**********************************************************************/
