const CAMPUS_ENTRY = "CAMPUS_ENTRY";

export function createCampus (campus){
	return {
		type: CAMPUS_ENTRY,
		campus
	}
}

export default function reducer (state = '', action){
	let newState = Object.assign([], state);
	switch (action.type) {
		case CAMPUS_ENTRY:
			newState.campus = action.campus
			break;
		default:
			return state;
	}
	return newState
}