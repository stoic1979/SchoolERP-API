import Counsellor from '../models/counsellor.model';
import BaseController from './baseController';

export default class CounsellorController extends BaseController {
    model = Counsellor;

    //getCounsellors
    getCounsellors = (req, res) => {

        console.log("[CounsellorController] :: data: " + JSON.stringify(req.body) );

        var query = req.body;

        this.model.find(query)
        .populate('user')
        .exec((err, obj) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'data': obj
            });
        });

    } // getCounsellors
}
