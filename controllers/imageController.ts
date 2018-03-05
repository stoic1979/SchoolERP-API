import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import * as aws from 'aws-sdk';

import config from '../config/config';

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');

const s3 = new aws.S3();
s3.config.accessKeyId = config.aws.accessKey;
s3.config.secretAccessKey = config.aws.secretKey;
s3.config.endpoint = 'nyc3.digitaloceanspaces.com';

export default class ImageController {

    imageUpload = (req, res) => {

        // Change bucket property to your Space name
        const now = new Date();
        const path = now.toISOString();
        const upload = multer({
            storage: multerS3({
                s3: s3,
                bucket: 'repvsrepassets/images/' + path,
                acl: 'public-read',
                key: (request, file, cb) => {
                    // console.log('key', request, file);
                    cb(null, file.originalname);
                },
                contentType: (request, file, cb) => {
                    // console.log('contentType', request, file);
                    cb(null, file.mimetype);
                }
            })
        }).array('file', 1);

        upload(req, res, (error) => {
            if (!req.files || !req.files[0]) {
                res.status(400).json({
                    'success': false,
                    'msg': 'No content request'
                });
                return console.error('No content request');
            }

            if (error) {
                res.status(500).json({
                    'success': false,
                    'error': error,
                    'msg': 'Image upload failed!'
                });
                return console.error(error);
            }
            console.log('File uploaded successfully.');
            res.json({
                'success': true,
                'msg': 'Image upload success!',
                'url': req.files[0].location
            });
        });
    }
}
