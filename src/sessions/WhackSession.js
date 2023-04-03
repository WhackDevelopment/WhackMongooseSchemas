/**********************************************************************/
'use strict'; // https://www.w3schools.com/js/js_strict.asp
/**********************************************************************/

const crypto = require('node:crypto');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**********************************************************************/

const {} = require('..');

/**********************************************************************/

const WhackSessionSchema = new Schema(
    {
        user: { type: String, required: true },
        token: { type: String, required: true, default: () => crypto.randomBytes(32).toString('hex') },
        csrf: { type: String, required: true, default: () => crypto.randomBytes(100).toString('base64') }
    },
    { collection: process.env.MONGODB_WHACK_SESSIONS_COLLECTION || 'sessions', timestamps: true }
);

/**********************************************************************/

WhackSessionSchema.methods.refreshCsrfToken = function () {
    this.csrf = crypto.randomBytes(100).toString('base64');
    this.save();
    return true;
};

/**********************************************************************/

module.exports = mongoose.models.WhackSession || model('WhackSession', WhackSessionSchema);

/**********************************************************************/
