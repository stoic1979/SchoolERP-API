import * as mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({

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
