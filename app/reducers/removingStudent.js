import axios from 'axios';

const  REMOVING_STUDENT = 'REMOVING-STUDENT';

export function removeStudent (student){
    return {
        type: REMOVING_STUDENT,
        student
    }
}

export function deleteStudent(student, history){
    console.log(student)
	return function thunk (dispatch){
		const id = student.id
		return axios.delete(`/api/students/${id}`)
		.then(() =>{
			dispatch(removeStudent(student));
		});
	}
}

export default function reducer (state= '', action){
	let newState = Object.assign('', state);
	switch (action.type) {
		case REMOVING_STUDENT:
			newState.students = newState.students.filter(element => element !== action.student)
			break;
		default:
			return state;
	}
	return newState
}