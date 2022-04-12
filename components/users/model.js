const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: { type: ObjectId },
    email: { type: String},
    password: { type: String }
});

module.exports = mongoose.model('user', userSchema);