

const WRITE_STUDENT = "WRITE_STUDENT";

export function createStudent (student){
	return {
		type: WRITE_STUDENT,
		student
	}
}

export default function reducer (state = '', action){
	let newState = Object.assign([], state);
	switch (action.type) {
		case WRITE_STUDENT:
			newState.student = action.student
			break;
		default:
			return state;
	}
	return newState
}