import * as mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    lat:String,
    lng:String,
    created_at:   Date,
    updated_at:   Date
});

stationSchema.pre('save', function(next) {

    const station = this;
    const now = new Date();
    station.updated_at = now;

    console.log('[Stationery-Model]  save(): stationery=' + JSON.stringify(station) );

    if (!station.created_at) {
       station.created_at = now;
    }

    next();
});

const Station = mongoose.model('Station', stationSchema);

export default stationSchema;