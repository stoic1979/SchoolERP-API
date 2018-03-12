import UserController from './controllers/userController';
import AuthController from './controllers/authController';
import SectionController from './controllers/sectionController';
import StandardController from './controllers/standardController';
import StudentController from './controllers/studentController';
import TeacherController from './controllers/teacherController';
import CounsellorController from './controllers/counsellorController';
import TransportManagerController from './controllers/transportManagerController';
import FinanceManagerController from './controllers/financeManagerController';
import PrincipalController from './controllers/principalController';
import StationeryController from './controllers/stationeryController';
import FeeController from './controllers/feeController';
import BusRouteController from './controllers/busRouteController';
import * as verifyToken from './controllers/verifyToken';

export default function setRoutes (app) {

    const userCtrl = new UserController();
    const authCtrl  = new AuthController();
    const standardCtrl = new StandardController();
    const sectionCtrl   = new SectionController();
    const studentCtrl   = new StudentController();
    const teacherCtrl =  new TeacherController();
    const counsellorCtrl = new CounsellorController();
    const financeMngrCtrl = new FinanceManagerController();
    const transportMngrCtrl = new TransportManagerController();
    const principalCtrl = new PrincipalController();
    const stationeryCtrl = new StationeryController();
    const feeCtrl = new FeeController();
    const busRouteCtrl = new BusRouteController();

    //-------------------------
    // Auth APIs
    //-------------------------
    app.route('/api/auth/login').post(authCtrl.login);
    app.route('/api/auth/signup').post(authCtrl.signup);
    app.route('/api/auth/forgot-password').post(authCtrl.resetPassword);

    //-------------------------
    // User APIs
    //-------------------------
    app.route('/api/users').get(verifyToken, userCtrl.getAll); // get all users
    app.route('/api/user/:id').get(verifyToken, userCtrl.get); // get user by id
    app.route('/api/user/:id').put(verifyToken, userCtrl.update); // update user by id
    app.route('/api/user').post(verifyToken, userCtrl.addUser); // save user
    app.route('/api/user/:id').delete(verifyToken, userCtrl.delete); // delete user by id


    app.route('/api/user').get(verifyToken, userCtrl.getUserByToken); // get user by token
    app.route('/api/user').put(verifyToken, userCtrl.updateUserByToken); // update user by token
    app.route('/api/reset-password').post(verifyToken, userCtrl.resetPassword); // update password by token

    //----------------------------------
    // Student APIs
    //----------------------------------
    app.route('/api/students/all').post(verifyToken, studentCtrl.getStudents); // get all students
    app.route('/api/student/:id').get(verifyToken, studentCtrl.get); // get student by id

    //---------------------------------------
    // Teacher APIs
    //--------------------------------------
    app.route('/api/teachers').get(verifyToken, teacherCtrl.getUsers); // get all teachers
    app.route('/api/teacher/:id').get(verifyToken, teacherCtrl.get); // get teacher by id

    //---------------------------------------
    // Counsellor APIs
    //--------------------------------------
    app.route('/api/counsellors').get(verifyToken, counsellorCtrl.getUsers); // get all counsellors
    app.route('/api/counsellor/:id').get(verifyToken, counsellorCtrl.get); // get counsellor by id

    //---------------------------------------
    // Finance Manager APIs
    //--------------------------------------
    app.route('/api/financeManagers').get(verifyToken, financeMngrCtrl.getUsers); // get all finance managers
    app.route('/api/financeManager/:id').get(verifyToken, financeMngrCtrl.get); // get finance manager by id

    //---------------------------------------
    // Transport Manager APIs
    //--------------------------------------
    app.route('/api/transportManagers').get(verifyToken, transportMngrCtrl.getUsers); // get all transport managers
    app.route('/api/transportManager/:id').get(verifyToken, transportMngrCtrl.get); // get transport manager by id

    //---------------------------------------
    // Principal APIs
    //--------------------------------------
    app.route('/api/principal').get(verifyToken, principalCtrl.getUsers); // get  principal
    app.route('/api/principal/:id').get(verifyToken, principalCtrl.get); // get principal by id

    //-------------------------
    // Standard APIs
    //-------------------------
    app.route('/api/standards').get(verifyToken, standardCtrl.getAll); // get all standards
    app.route('/api/standard/:id').get(verifyToken, standardCtrl.get); // get standard by id
    app.route('/api/standard/:id').put(verifyToken, standardCtrl.update); // update standard by id
    app.route('/api/standard').post(verifyToken, standardCtrl.insert); // save standard
    app.route('/api/standard/:id').delete(verifyToken, standardCtrl.delete); // delete standard by id

    //-------------------------
    // Section APIs
    //-------------------------
    app.route('/api/sections').get(verifyToken, sectionCtrl.getAll); // get all sections
    app.route('/api/section/:id').get(verifyToken, sectionCtrl.get); // get section by id
    app.route('/api/section/:id').put(verifyToken, sectionCtrl.update); // update section by id
    app.route('/api/section').post(verifyToken, sectionCtrl.insert); // save section
    app.route('/api/section/:id').delete(verifyToken, sectionCtrl.delete); // delete section by id

    //-------------------------
    // Stationery APIs
    //-------------------------
    app.route('/api/stationery').get(verifyToken, stationeryCtrl.getAll); // get all stationery items
    app.route('/api/stationery/:id').get(verifyToken, stationeryCtrl.get); // get stationery by id
    app.route('/api/stationery/:id').put(verifyToken, stationeryCtrl.update); // update stationery by id
    app.route('/api/stationery').post(verifyToken, stationeryCtrl.insert); // save stationery
    app.route('/api/stationery/:id').delete(verifyToken, stationeryCtrl.delete); // delete stationery by id

    //-------------------------
    // Fee APIs
    //-------------------------
    app.route('/api/fees').get(verifyToken, feeCtrl.getAll); // get all fees 
    app.route('/api/fee/:id').get(verifyToken, feeCtrl.get); // get fee by id
    app.route('/api/fee/:id').put(verifyToken, feeCtrl.update); // update fee by id
    app.route('/api/fee').post(verifyToken, feeCtrl.insert); // save fee
    app.route('/api/fee/:id').delete(verifyToken, feeCtrl.delete); // delete fee by id

    //-------------------------
    // Bus Route APIs
    //-------------------------
    app.route('/api/busRoutes').get(verifyToken, busRouteCtrl.getAll); // get all bus routes 
    app.route('/api/busRoute/:id').get(verifyToken, busRouteCtrl.get); // get bus route by id
    app.route('/api/busRoute/:id').put(verifyToken, busRouteCtrl.update); // update bus route by id
    app.route('/api/busRoute').post(verifyToken, busRouteCtrl.insert); // save bus route
    app.route('/api/busRoute/:id').delete(verifyToken, busRouteCtrl.delete); // delete bus route by id
}