import * as mongoose from 'mongoose';

const principalSchema = new mongoose.Schema({

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
// principalSchema.pre('save', (next) => {
principalSchema.pre('save', function(next) {

    const principal = this;
    const now = new Date();
    principal.updated_at = now;

    console.log('[Principal-Model]  save(): principal=' + JSON.stringify(principal) );

    if (!principal.created_at) {
       principal.created_at = now;
    }

    next();
});

const Principal = mongoose.model('Principal', principalSchema);

export default Principal;
