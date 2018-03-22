import Attendance from '../models/attendance.model';

import BaseController from './baseController';

export default class AttendanceController extends BaseController {
	
	model = Attendance;
}