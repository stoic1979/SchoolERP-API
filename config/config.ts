const config = {
	//db : 'mongodb://admin:123@localhost/schooldb?authSource=admin', // mongodb url
        //db : 'mongodb://localhost/schooldb',
        db: 'mongodb://schooluser:schoolpass@ds157818.mlab.com:57818/schoolerp',
    db_test: 'mongodb://localhost/schooldb_test',
    secret: 'sdb@wb_2018=4everNSK' // for jwt token
};

export default config;
