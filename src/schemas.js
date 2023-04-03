/**********************************************************************/
'use strict'; // https://www.w3schools.com/js/js_strict.asp
/**********************************************************************/

const FlakeId = require('flakeid');

// initiate flake
const flake = new FlakeId({
    mid: process.env.MID || 1,
    timeOffset: process.env.ID_OFFSET || (2023 - 1970) * 31536000 * 1000
});

/**********************************************************************/

const populate = require('mongoose-autopopulate');

/**********************************************************************/

const WhackUserConfiguration = require('./configs/WhackUserConfiguration');
const UserConnection = require('./connections/UserConnection');
const WhackProfile = require('./profiles/WhackProfile');
const WhackSession = require('./sessions/WhackSession');
const WhackUser = require('./users/WhackUser');

/**********************************************************************/

module.exports = {
    populate,
    FlakeId,
    flake,
    /**************************/
    WhackUserConfiguration,
    UserConnection,
    WhackProfile,
    WhackSession,
    WhackUser
};

/**********************************************************************/
