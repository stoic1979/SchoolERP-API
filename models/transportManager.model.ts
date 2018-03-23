import * as mongoose from 'mongoose';

const transportManagerSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true
    },
    name: {
        type:String,
        required:true
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        required:true
    },
    dob: {
        type:Date,
        required:true
    },
    doj: {
        type:Date,
        required:true
    },
    marital_status:{
        type:String,
    },
    mob_no: {
        type:String,
        required:true
    },
    tel_no: {
        type:String,
    },
    father_name: {
        type:String,
        required:true
    },
    education: {
        type:String,
        required:true
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
        required:true
    },
    address: {
        type:String,
        required:true
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
