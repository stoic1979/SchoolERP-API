abstract class BaseController {

    abstract model: any;

    // Get all
    getAll = (req, res) => {
        this.model.find({}, (err, docs) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'data': docs
            });
        });
    }

     //getUsers
    getUsers = (req, res) => {

        console.log('[BaseController] get');

        this.model.find()
        .populate('user')
        .exec((err, obj) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'data': obj
            });
        });

    } // getUsers

    // Count all
    count = (req, res) => {
        this.model.count((err, count) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'count': count
            });
        });
    }

    // Insert
    insert = (req, res) => {
        const obj = new this.model(req.body);
        obj.save((err, item) => {
            if (err) {
                res.status(400).json({
                    'success': false,
                    'code': err.code,
                    'error': err.errmsg
                });
                return console.error(err);
            }

            console.log("sucess: true "+item);
            res.status(200).json({
                'success': true,
                'data': item
            });
        });
    }

    // Get by id
    get = (req, res) => {

        console.log('[BaseController] get, id: [' + req.params.id + ']');

        this.model.findOne({ _id: req.params.id }, (err, obj) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'data': obj
            });
        });
    }

    // Update by id
    update = (req, res) => {
        console.log('[BaseController] put, id: [' + req.params.id + ']');
        this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
            if (err) { return console.error(err); }
            res.status(200).json({
                'success': true
            });
        });
    }

    // Delete by id
    delete = (req, res) => {
        this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
            if (err) { return console.error(err); }
            res.status(200).json({
                'success': true
            });
        });
    }
}

export default BaseController;
