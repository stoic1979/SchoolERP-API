import * as mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({

    parent: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Parent'
    },
    name: {
        type:String,
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
    },

    lib_no: String,
    section:String,
    standard:String,
    dob:Date,
    doj:Date,
    previous_school:String,
    aadhar_id:String,

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
