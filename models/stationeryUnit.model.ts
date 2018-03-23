import * as mongoose from 'mongoose';

const stationeryUnitSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    created_at:   Date,
    updated_at:   Date
});

stationeryUnitSchema.pre('save', function(next) {

    const stationeryUnit = this;
    const now = new Date();
    stationeryUnit.updated_at = now;

    console.log('[Stationery-Model]  save(): stationery=' + JSON.stringify(stationeryUnit) );

    if (!stationeryUnit.created_at) {
       stationeryUnit.created_at = now;
    }

    next();
});

const StationeryUnit = mongoose.model('StationeryUnit', stationeryUnitSchema);

export default StationeryUnit;