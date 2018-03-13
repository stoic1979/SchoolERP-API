import TransportManager from '../models/transportManager.model';
import BaseController from './baseController';

export default class TransportManagerController extends BaseController {
    model = TransportManager;

    //getTransportManagers
    getTransportManagers = (req, res) => {

        console.log("[TransportManagerController] :: data: " + JSON.stringify(req.body) );

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

    } // getTransportManagers
}
