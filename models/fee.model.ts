import * as mongoose from 'mongoose';

const feeSchema = new mongoose.Schema({

    fee_head: {
        type:String,
        required:true
    },
    code: {
        type:String,
        required:true
    },
    amount: {
        type:String,
        required:true
    },

    due_date: {
        type:Date,
        required:true
    }, 

    created_at:   Date,
    updated_at:   Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// feeSchema.pre('save', (next) => {
feeSchema.pre('save', function(next) {

    const fee = this;
    const now = new Date();
    fee.updated_at = now;

    console.log('[Fee-Model]  save(): fee=' + JSON.stringify(fee) );

    if (!fee.created_at) {
       fee.created_at = now;
    }

    next();
});

const Fee = mongoose.model('Fee', feeSchema);

export default Fee;
