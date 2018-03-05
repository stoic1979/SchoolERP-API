import * as mongoose from 'mongoose';

const busRouteSchema = new mongoose.Schema({

    bus_no: {
        type:String,
    },
    bus_schedule: {
        type:String,
        enum:['MORNING', 'AFTERNOON']
    },
    first_stop_name: {
        type:String,
    },
    first_stop_time: {
        type:String,
    },
    subsequent_stops: {
        type:Array,
    }, 

    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// busRouteSchema.pre('save', (next) => {
busRouteSchema.pre('save', function(next) {

    const busRoute = this;
    const now = new Date();
    busRoute.updated_at = now;

    console.log('[Fee-Model]  save(): busRoute=' + JSON.stringify(busRoute) );

    if (!busRoute.created_at) {
       busRoute.created_at = now;
    }

    next();
});

const BusRoute = mongoose.model('BusRoute', busRouteSchema);

export default BusRoute;
