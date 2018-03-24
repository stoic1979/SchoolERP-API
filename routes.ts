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
import StationeryUnitController from './controllers/stationeryUnitController';
import AttendanceController from './controllers/attendanceController';
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
    const stationeryUnitCtrl = new StationeryUnitController();
    const attendanceCtrl = new AttendanceController();

    //-------------------------
    // Auth APIs
    //-------------------------
    app.route('/api/auth/login').post(authCtrl.login);
    app.route('/api/auth/signup').post(authCtrl.signup);
    app.route('/api/auth/forgot-password').post(authCtrl.resetPassword);

    //-------------------------
    // Dashboard APIs
    //-------------------------
    app.route('/api/totalstudents').get(verifyToken, studentCtrl.getTotalStudents);
    app.route('/api/totalteachers').get(verifyToken, teacherCtrl.getTotalTeachers);

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
    app.route('/api/student/:id').get(verifyToken, studentCtrl.getStudentById); // get student by id

    //---------------------------------------
    // Teacher APIs
    //--------------------------------------
    app.route('/api/teachers/all').post(verifyToken, teacherCtrl.getTeachers); // get all teachers
    app.route('/api/teacher/:id').get(verifyToken, teacherCtrl.getUserById); // get teacher by id

    //---------------------------------------
    // Counsellor APIs
    //--------------------------------------
    app.route('/api/counsellors/all').post(verifyToken, counsellorCtrl.getCounsellors); // get all counsellors
    app.route('/api/counsellor/:id').get(verifyToken, counsellorCtrl.getUserById); // get counsellor by id

    //---------------------------------------
    // Finance Manager APIs
    //--------------------------------------
    app.route('/api/financeManagers/all').post(verifyToken, financeMngrCtrl.getFinanceManagers); // get all finance managers
    app.route('/api/financeManager/:id').get(verifyToken, financeMngrCtrl.getUserById); // get finance manager by id

    //---------------------------------------
    // Transport Manager APIs
    //--------------------------------------
    app.route('/api/transportManagers/all').post(verifyToken, transportMngrCtrl.getTransportManagers); // get all transport managers
    app.route('/api/transportManager/:id').get(verifyToken, transportMngrCtrl.getUserById); // get transport manager by id

    //---------------------------------------
    // Principal APIs
    //--------------------------------------
    app.route('/api/principal').get(verifyToken, principalCtrl.getUsers); // get  principal
    app.route('/api/principal/:id').get(verifyToken, principalCtrl.getUserById); // get principal by id

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
    // Stationery Unit APIs
    //-------------------------

    app.route('/api/stationeryunit').get(verifyToken, stationeryUnitCtrl.getAll); // get all stationery items
    app.route('/api/stationeryunit/:id').get(verifyToken, stationeryUnitCtrl.get); // get stationery by id
    app.route('/api/stationeryunit/:id').put(verifyToken, stationeryUnitCtrl.update); // update stationery by id
    app.route('/api/stationeryunit').post(verifyToken, stationeryUnitCtrl.insert); // save stationery
    app.route('/api/stationeryunit/:id').delete(verifyToken, stationeryUnitCtrl.delete); // delete stationery by id

    //-------------------------
    // Attendance APIs
    //-------------------------

    app.route('/api/attendance').get(verifyToken, attendanceCtrl.getAll); // get all attendance
    app.route('/api/attendance/:id').get(verifyToken, attendanceCtrl.get); // get attendance by id
    app.route('/api/attendance/:id').put(verifyToken, attendanceCtrl.update); // update attendance by id
    app.route('/api/attendance').post(verifyToken, attendanceCtrl.insert); // save attendance
    app.route('/api/attendance/:id').delete(verifyToken, attendanceCtrl.delete); // delete attendance by id

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
