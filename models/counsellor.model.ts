import * as mongoose from 'mongoose';

const counsellorSchema = new mongoose.Schema({

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
// counsellorSchema.pre('save', (next) => {
counsellorSchema.pre('save', function(next) {

    const counsellor = this;
    const now = new Date();
    counsellor.updated_at = now;

    console.log('[Counsellor-Model]  save(): counsellor=' + JSON.stringify(counsellor) );

    if (!counsellor.created_at) {
       counsellor.created_at = now;
    }

    next();
});

const Counsellor = mongoose.model('Counsellor', counsellorSchema);

export default Counsellor;
