import campuses from './campuses'
import newCampusEntry from './newCampusEntry'
import newStudentEntry from './newStudentEntry'
import students from './students'
import currrentStudents from './currentstudents'
import { combineReducers } from 'redux'

const reducer = combineReducers({
	campuses,
	newCampusEntry,
	newStudentEntry,
	students,
	currrentStudents
});
export default reducer;