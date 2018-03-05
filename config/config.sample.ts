const config = {
    db : 'mongodb://sample', // mongodb url
    secret: 'sample secret key', // for jwt token
    mailer: { // for sending email
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'sample@gmail.com',
            pass: 'sample gmail password'
        }
    },
    aws: { // for image upload to space of digitalocean
        accessKey: 'SAMPLE ACCESS KEY',
        secretKey: 'sample secret key'
    },
    resetLink: 'sample link' // for password reset
};

export default config;
