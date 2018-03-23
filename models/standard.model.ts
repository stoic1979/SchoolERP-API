import * as mongoose from 'mongoose';

const standardSchema = new mongoose.Schema({

    name:    {
        type: String,
        required:true
    },
    passout_year: {
        type:String,
        required:true
    },
    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// standardSchema.pre('save', (next) => {
standardSchema.pre('save', function(next) {

    const standard = this;
    const now = new Date();
    standard.updated_at = now;

    console.log('[Standard-Model]  save(): standard=' + JSON.stringify(standard) );

    if (!standard.created_at) {
       standard.created_at = now;
    }
    
    next();

});

const Standard = mongoose.model('Standard', standardSchema);

export default Standard;
