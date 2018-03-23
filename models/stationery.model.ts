import * as mongoose from 'mongoose';

const stationerySchema = new mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    unit: {
         type: mongoose.Schema.Types.ObjectId, 
         refs: 'StationeryUnit',
        required:true
    },
    qty_per_unit: {
        type:String,
        required:true
    },

    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// stationerySchema.pre('save', (next) => {
stationerySchema.pre('save', function(next) {

    const stationery = this;
    const now = new Date();
    stationery.updated_at = now;

    console.log('[Stationery-Model]  save(): stationery=' + JSON.stringify(stationery) );

    if (!stationery.created_at) {
       stationery.created_at = now;
    }

    next();
});

const Stationery = mongoose.model('Stationery', stationerySchema);

export default Stationery;
