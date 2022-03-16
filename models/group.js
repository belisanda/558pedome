import _ from 'lodash';
import mongoose from 'mongoose';

const GroupSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    number: Number,
    name: String,
    leader: String
});

const GroupModel = mongoose.model('Group', GroupSchema);
module.exports = GroupModel;