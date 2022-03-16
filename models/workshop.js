import _ from 'lodash';
import mongoose from 'mongoose';

const WorkshopSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    pin: Number
});

const WorkshopModel = mongoose.model('Workshop', WorkshopSchema);
module.exports = WorkshopModel;