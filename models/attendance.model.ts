import * as mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({

    user_id: {
         type: mongoose.Schema.Types.ObjectId, 
         refs: 'User'
    },
    date:         Date,
    isLate:       Boolean,
    arrival_time: String,
    status:       String,
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