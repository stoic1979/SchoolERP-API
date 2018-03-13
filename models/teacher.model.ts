import * as mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({

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
// teacherSchema.pre('save', (next) => {
teacherSchema.pre('save', function(next) {

    const teacher = this;
    const now = new Date();
    teacher.updated_at = now;

    console.log('[Teacher-Model]  save(): teacher=' + JSON.stringify(teacher) );

    if (!teacher.created_at) {
       teacher.created_at = now;
    }

    next();
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;
