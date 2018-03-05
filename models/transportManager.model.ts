import * as mongoose from 'mongoose';

const transportManagerSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    name: {
        type:String,
    },
    dob: {
        type:Date,
    },
    doj: {
        type:Date,
    },
    marital_status:{
        type:String,
    },
    mob_no: {
        type:String,
    },
    tel_no: {
        type:String,
    },
    father_name: {
        type:String,
    },
    education: {
        type:String,
    },
    work_exp: {
        type:String,
    },
    bank_acc_no: {
        type:String,
    },
    bank_name: {
        type:String,
    },
    aadhar_id: {
        type:String,
    },
    address: {
        type:String,
    },

    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// transportManagerSchema.pre('save', (next) => {
transportManagerSchema.pre('save', function(next) {

    const transportManager = this;
    const now = new Date();
    transportManager.updated_at = now;

    console.log('[TransportManager-Model]  save(): transportManager=' + JSON.stringify(transportManager) );

    if (!transportManager.created_at) {
       transportManager.created_at = now;
    }

    next();
});

const TransportManager = mongoose.model('TransportManager', transportManagerSchema);

export default TransportManager;
