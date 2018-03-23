import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({

    parent: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Parent',
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
    lib_no: String,
    standard:{
       type: String,
        required:true
    },
    section:{
       type: String,
        required:true
    },
    dob:{
       type: Date,
       required:true
    },
    doj:{
       type: Date,
       required:true
    },
    previous_school:String,
    aadhar_id:{
       type: String,
        required:true
    },

    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// studentSchema.pre('save', (next) => {
studentSchema.pre('save', function(next) {

    const student = this;
    const now = new Date();
    student.updated_at = now;

    console.log('[Student-Model]  save(): student=' + JSON.stringify(student) );

    if (!student.created_at) {
       student.created_at = now;
    }

    next();
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
