/**********************************************************************/
'use strict'; // https://www.w3schools.com/js/js_strict.asp
/**********************************************************************/

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = process.env.SALT_WORK_FACTOR || 10;

/**********************************************************************/

const { populate, flake, WhackProfile } = require('..');

/**********************************************************************/

const WhackUserSchema = new Schema(
    {
        id: { type: String, unique: true, required: true, index: true, default: () => flake.gen() },
        username: { type: String, unique: true, required: true, index: true, maxLength: 32 },
        email: { type: String, unique: true, required: true, index: true },
        hashed_password: { type: String, required: true },
        profile: {
            type: Schema.Types.ObjectId,
            ref: 'WhackProfile',
            autopopulate: true
        },
        config: {
            type: Schema.Types.ObjectId,
            ref: 'WhackUserConfiguration',
            autopopulate: true
        },
        connections: [
            {
                type: Schema.Types.ObjectId,
                ref: 'UserConnection',
                autopopulate: true
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'WhackUser'
            }
        ],
        sessions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'WhackSession'
            }
        ]
    },
    { collection: process.env.MONGODB_USERS_COLLECTION || 'users', timestamps: true }
);

/**********************************************************************/

WhackUserSchema.path('id');
WhackUserSchema.plugin(populate);

/**********************************************************************/

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
    return bcrypt.compareSync(plaintext, this.password);
};

/**********************************************************************/

module.exports = mongoose.models.WhackUser || model('WhackUser', WhackUserSchema);

/**********************************************************************/
