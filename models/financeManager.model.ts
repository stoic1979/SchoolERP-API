import * as mongoose from 'mongoose';

const financeManagerSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    name: {
        type:String,
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
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
// financeManagerSchema.pre('save', (next) => {
financeManagerSchema.pre('save', function(next) {

    const financeManager = this;
    const now = new Date();
    financeManager.updated_at = now;

    console.log('[FinanceManager-Model]  save(): financeManager=' + JSON.stringify(financeManager) );

    if (!financeManager.created_at) {
       financeManager.created_at = now;
    }

    next();
});

const FinanceManager = mongoose.model('FinanceManager', financeManagerSchema);

export default FinanceManager;
