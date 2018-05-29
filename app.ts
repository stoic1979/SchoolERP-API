import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as cors from 'cors';

import * as fileUpload from 'express-fileupload';
import config from './config/config';
import setRoutes from './routes';
import * as base64 from 'node-base64-image';
import * as fs from 'fs';


const app = express();
app.set('port', (process.env.PORT || 3002));

app.use(cors());
app.use(fileUpload());
app.use('/', express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

mongoose.connect(config.db);
const db = mongoose.connection;
(mongoose as any).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');

    setRoutes(app);

   /* app.get('/*', function (req, res) {
        console.log('load index file');
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });
*/
    app.listen(app.get('port'), () => {
        console.log('School ERP server listening on port ' + app.get('port'));
    });

});

export { app }
