import Student from '../models/student.model';
import BaseController from './baseController';

export default class StudentController extends BaseController {
    model = Student;

    //getStudents
    getStudents = (req, res) => {

        console.log('[StudentController] getStudents');

        this.model.find()
        .populate('parent')
        .exec((err, obj) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'data': obj
            });
        });

    } // getStudents

}
