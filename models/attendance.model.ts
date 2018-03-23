import * as mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({

    user_id: {
         type: mongoose.Schema.Types.ObjectId, 
         refs: 'User',
         required : true
    },
    date: Date,
    isLate: {
        type: Boolean,
        required: true
    } ,
    arrival_time: {
        type: String,
        required: true
    },
    status: {
        type:String,
        required:true
    },
    remarks:      String,
    created_at:   Date,
    updated_at:   Date
});


attendanceSchema.pre('save', function(next) {

    const attendance = this;
    const now = new Date();
    attendance.updated_at = now;

    console.log('[Attendance-Model]  save(): attendence=' + JSON.stringify(attendance) );

    if (!attendance.created_at) {
       attendance.created_at = now;
    }

    next();
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;