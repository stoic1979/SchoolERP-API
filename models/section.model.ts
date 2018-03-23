import * as mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({

    standard: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Standard',
        required:true
    },
    name: {
        type:String,
        required:true
    },
    max_student_cnt: Number,
    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// sectionSchema.pre('save', (next) => {
sectionSchema.pre('save', function(next) {

    const section = this;
    const now = new Date();
    section.updated_at = now;

    //console.log('[Section-Model]  save(): section=' + JSON.stringify(section) );

    if (!section.created_at) {
       section.created_at = now;
    }

    next();
});

const Section = mongoose.model('Section', sectionSchema);

export default Section;
