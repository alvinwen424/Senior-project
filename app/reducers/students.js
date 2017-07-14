import axios from 'axios';


//ACTION TYPES
const GET_STUDENT = "GET_STUDENT";
const GET_STUDENTS = "GET_STUDENTS";


//ACTION CREATORS
export function getStudent (student){
	return {
		type: GET_STUDENT,
		theStudent: student
	}
}

export function getStudents (students){
	return {
		type: GET_STUDENTS,
		theStudents: students
	}
}

//THUNKS

export function fetchStudents (){
	return function thunk (dispatch){
		return axios.get('./api/students')
		.then(res => res.data)
		.then(students => {
			dispatch(getStudents(students))
		})
	}
}

export function postStudent (student, history){

	return function thunk (dispatch){
		return axios.post('./api/students', student)
		.then(res => res.data)
		.then(newStudent =>{
			dispatch(getStudent(newStudent));
			history.push(`/students/${newCampus.id}`)
		});
	}
}


//reducers

export default function reducer (state = [], action) {
	let newState = Object.assign([], state)
	switch (action.type) {
		case GET_STUDENTS:
		 newState.students =[...action.theStudents] 
		 break;
		case GET_STUDENT:
		 newState.students = [...newState.students, action.theStudent]
		 break;
		default:
			return state;
	}
	return newState;
}