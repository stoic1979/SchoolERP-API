import * as mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true
    },
    mother_name: {
        type:String,
        required:true
    },
    mother_email: {
        type:String,
        required:true
    },
    mother_mob_no: {
        type:String,
        required:true
    },

    mother_tel_no: {
        type:String
    },
    father_name: {
        type:String,
        required:true
    },

    father_email: {
        type:String,
        required:true
    },

    father_mob_no: {
        type:String,
        required:true
    },
    father_tel_no: {
        type:String,
    },

    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// parentSchema.pre('save', (next) => {
parentSchema.pre('save', function(next) {

    const parent = this;
    const now = new Date();
    parent.updated_at = now;

    console.log('[Parent-Model]  save(): parent=' + JSON.stringify(parent) );

    if (!parent.created_at) {
       parent.created_at = now;
    }

    next();
});

const Parent = mongoose.model('Parent', parentSchema);

export default Parent;
