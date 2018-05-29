import StationeryUnit from '../models/stationeryUnit.model';
import BaseController from './baseController';

export default class StationeryUnitController extends BaseController {
	
	model = StationeryUnit;


	 getStationary = (req,res) =>{
        console.log('[StationeryController] getStationary')
        var query = req.body;
        this.model.find(query)
        .populate('user' )      
        .exec((err, obj) => {
            if (err) { return console.error(err); }

            res.json({
                'success': true,
                'data': obj
            });
        });

    }
}