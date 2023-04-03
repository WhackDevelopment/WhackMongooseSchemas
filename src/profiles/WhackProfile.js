/**********************************************************************/
'use strict'; // https://www.w3schools.com/js/js_strict.asp
/**********************************************************************/

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**********************************************************************/

const { flake } = require('..');

/**********************************************************************/

const WhackProfileSchema = new Schema(
    {
        id: { type: String, unique: true, required: true, index: true, default: () => flake.gen() },
        first_name: { type: String, required: false, default: '', maxLength: 32 },
        last_name: { type: String, required: false, default: '', maxLength: 32 },
        location: { type: String, required: false, default: 'Not Specified', maxLength: 256 },
        status: { type: String, required: false, default: '', maxLength: 256 },
        bio: { type: String, required: false, default: '', maxLength: 1024 },
        languages: [{ type: String }]
    },
    { collection: process.env.MONGODB_PROFILES_COLLECTION || 'profiles', timestamps: true }
);

/**********************************************************************/

WhackProfileSchema.path('id');

/**********************************************************************/

module.exports = mongoose.models.WhackProfile || model('WhackProfile', WhackProfileSchema);

/**********************************************************************/
