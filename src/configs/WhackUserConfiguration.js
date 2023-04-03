/**********************************************************************/
'use strict'; // https://www.w3schools.com/js/js_strict.asp
/**********************************************************************/

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**********************************************************************/

const { flake } = require('..');

/**********************************************************************/

const WhackUserConfigurationSchema = new Schema(
    {
        id: { type: String, unique: true, required: true, index: true, default: () => flake.gen() },
        language: { type: String, default: 'en' }
    },
    { collection: process.env.MONGODB_USER_CONFIG_COLLECTION || 'user_configurations', timestamps: true }
);

/**********************************************************************/

WhackUserConfigurationSchema.path('id');

/**********************************************************************/

module.exports = mongoose.models.WhackUserConfiguration || model('WhackUserConfiguration', WhackUserConfigurationSchema);

/**********************************************************************/
