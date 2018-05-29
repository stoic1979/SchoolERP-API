import Student from '../models/student.model';
import BaseController from './baseController';

export default class StudentController extends BaseController {
    model = Student;

    //getStudents
    getStudents = (req, res) => {

        console.log("[StudentController] :: data: " + JSON.stringify(req.body) );

        var query = req.body;

        this.model.find(query)
        .populate({ path:'parent', populate:{ path:'user' } })
        .exec((err, obj) => {
            if (err) { return console.error(err); }

            res.json({
                'success': true,
                'data': obj
            });
        });

    } // getStudents

    // getStudentById
    getStudentById = (req, res) => {

        console.log('[UsersController] get, id: [' + req.params.id + ']');

        this.model.findOne({ _id: req.params.id })
        .populate('parent')
        .exec((err, obj) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'data': obj
            });
        });
    } //getStudentById
    
 //getTotalStudents
    getTotalStudents = (req, res) => {

        console.log("[StudentController] ::(getTotalStudents) data: " + JSON.stringify(req.body) );

        this.model.count({}, function( err, count){
         console.log( "Number of Students:", count );
         res.json({
                'success': true,
                'totalstudents': count
            });
        });

    } // getTotalStudents
}
