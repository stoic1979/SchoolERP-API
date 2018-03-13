import Principal from '../models/principal.model';
import BaseController from './baseController';

export default class PrincipalController extends BaseController {
    model = Principal;

    //getPrincipal
    getPrincipal = (req, res) => {

        console.log("[PrincipalController] :: data: " + JSON.stringify(req.body) );

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

    } // getPrincipal
}
