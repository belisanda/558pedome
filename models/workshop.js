const _ = require('lodash');
const mongoose = require('mongoose');

const WorkshopSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    pin: Number
});

const WorkshopModel = mongoose.model('Workshop', WorkshopSchema);
module.exports = WorkshopModel;