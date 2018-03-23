import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({

    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['SUPER_ADMIN', 'ADMIN', 'PRINCIPAL', 'TEACHER', 'SPLECIALIST-TEACHER', 'FINANCE-MANAGER', 'TRANSPORT-MANAGER', 'PARENT', 'COUNSELLOR', 'STUDENT'],
        required: true
    },

    created_at: Date,
    updated_at: Date
});

//
// FIXME: Please do not use es6 syntax, arrow function here !!!!
// https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
// userSchema.pre('save', (next) => {
userSchema.pre('save', function(next) {

    const user = this;
    const now = new Date();
    user.updated_at = now;

    console.log('[Users-Model]  save(): user=' + JSON.stringify(user) );

    if (!user.created_at) {
       user.created_at = now;
    }

    if (!user.isModified('password')) { 
        return next(); 
    }

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) { 
            return next(err);
        }

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, (err1, hash) => {
            if (err1) { return next(err1); }
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = (candidatePassword, existPassword, cb) => {
    bcrypt.compare(candidatePassword, existPassword, (err, isMatch) => {
        if (err) { 

            console.log("user schema error on comapare password: " + err);
            return cb(err); 
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

export default User;
