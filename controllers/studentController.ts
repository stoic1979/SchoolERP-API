import Student from '../models/student.model';
import BaseController from './baseController';

export default class StudentController extends BaseController {
    model = Student;

    //getStudents
    getStudents = (req, res) => {

        console.log("[StudentController] :: data: " + JSON.stringify(req.body) );

        var query = req.body;

        this.model.find(query)
        .populate('parent')
        .exec((err, obj) => {
            if (err) { return console.error(err); }

            res.json({
                'success': true,
                'data': obj
            });
        });

    } // getStudents

    getStudentById = (req, res) => {

        this.model.find({_id: req.params.id})
        .populate('parent')
        .exec((err, obj) => {
            if (err) { return console.error(err); }

            console.log("[StudentController] getStudentById :: data: " + obj);
            res.json({
                'success': true,
                'data': obj
            });
        });

    } // getStudents
    
    //getTotalStudents
    getTotalStudents = (req, res) => {

        console.log("[StudentController] :: data: " + JSON.stringify(req.body) );

        this.model.count({}, function( err, count){
         console.log( "Number of students:", count );
         res.json({
                'success': true,
                'totalstudents': count
            });
        });

    } // getTotalStudents
}
