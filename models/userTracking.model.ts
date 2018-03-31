import * as mongoose from 'mongoose';

const userTrackingSchema = new mongoose.Schema({

    ip: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }, 
    accessed_at:   Date,
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// feeSchema.pre('save', (next) => {
userTrackingSchema.pre('save', function(next) {

    const userTracking = this;
    const now = new Date();

    console.log('[UserTracking-Model]  save(): fee=' + JSON.stringify(userTracking) );

    if (!userTracking.accessed_at) {
       userTracking.accessed_at = now;
    }

    next();
});

const UserTracking = mongoose.model('UserTracking', userTrackingSchema);

export default UserTracking;
