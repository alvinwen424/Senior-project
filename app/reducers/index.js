import campuses from './campuses'
import newCampusEntry from './newCampusEntry'
import newStudentEntry from './newStudentEntry'
import students from './students'
import currrentStudents from './currentstudents'
import removingStudents from './removingStudent'
import { combineReducers } from 'redux'

const reducer = combineReducers({
	campuses,
	newCampusEntry,
	newStudentEntry,
	students,
	currrentStudents,
	removingStudents,

});
export default reducer;