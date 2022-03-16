import _ from 'lodash';
import mongoose from 'mongoose';

const TeamSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    groupId: mongoose.Schema.Types.ObjectId,
    leader: String,
    nElements: Number,
    pin: Number
});

const TeamModel = mongoose.model('Team', TeamSchema);
module.exports = TeamModel;