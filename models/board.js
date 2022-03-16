import _ from 'lodash';
import mongoose from 'mongoose';

const BoardSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    workshopId: mongoose.Schema.Types.ObjectId,
    teamId: mongoose.Schema.Types.ObjectId
});

const BoardModel = mongoose.model('Board', BoardSchema);
module.exports = BoardModel;