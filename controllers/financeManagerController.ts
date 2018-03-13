import FinanceManager from '../models/financeManager.model';
import BaseController from './baseController';

export default class FinanceManagerController extends BaseController {
    model = FinanceManager;
    
    //getFinanceManagers
    getFinanceManagers = (req, res) => {

        console.log("[FinanceManagerController] :: data: " + JSON.stringify(req.body) );

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

    } // getFinanceManagers
}
