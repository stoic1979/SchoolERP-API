import Attendance from '../models/attendance.model';
import BaseController from './baseController';
import * as moment from 'moment';
import Student from '../models/student.model';

export default class AttendanceController extends BaseController {
	
	model = Attendance;
    model1 = Student;

	getAttendanceByStandard = (req, res) => {
        console.log('[AttendanceController] getAttendanceByStandard');
        const atdate = new Date(req.params.date);
        const nextdate = moment(req.params.date).add(1, "days");

        console.log('[AttendanceController] nextdate',nextdate);
        this.model.find({standard: req.params.standard, section: req.params.section, date: { $gte: atdate, $lt: nextdate} })
        .exec((err, obj) => {
            if (err) {
                res.status(500).json({
                    'success': false,
                    'message': 'Not found attendance'
                });
                return console.error(err);
            } 

            res.json({
                'success': true,
                'data': obj
            });
        });
    }
    
    //update attendance (status) of user on specific date
    updateAttendance = (req, res) => {
        console.log('[AttendanceController] updateAttendance ');
        const atdate = new Date(req.body.date);
        const nextdate = moment(req.body.date).add(1, "days");

        this.model.findOneAndUpdate({ user: req.body.user, date: { $gte: atdate, $lt: nextdate}}, req.body, (err) => {
            if (err) { return console.error(err); } else {
            	res.status(200).json({
                'success': true
                });
                
            }  
        });
    }

    getAttendence = (req,res) =>{
        console.log('[AttendanceController] getAttendance')
        var query = req.body;
        this.model.find(query)
        .populate({ path:'student', populate:{ path:'user' } })      
        .exec((err, obj) => {
            if (err) { return console.error(err); }

            res.json({
                'success': true,
                'data': obj
            });
        });

    }
}