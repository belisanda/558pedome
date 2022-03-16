const _ = require('lodash');
const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    workshopId: mongoose.Schema.Types.ObjectId,
    teamId: mongoose.Schema.Types.ObjectId
});

const BoardModel = mongoose.model('Board', BoardSchema);
module.exports = BoardModel;