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

}
