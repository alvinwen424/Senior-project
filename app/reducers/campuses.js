import axios from 'axios';

//ACTION TYPES
const GET_CAMPUSES = "GET_CAMPUSES";
const GET_CAMPUS = "GET_CAMPUS";


//ACTION CREATORS
export function getCampus (campus){
	return {
		type: GET_CAMPUS,
		theCampus: campus
	}
}

export function getCampuses (campuses){
	return {
		type: GET_CAMPUSES,
		theCampuses: campuses
	}
}

//THUNKS

export function fetchCampuses (){
	return function thunk (dispatch){
		return axios.get('./api/campuses')
		.then(res => res.data)
		.then(campuses => {
			dispatch(getCampuses(campuses))
		})
	}
}

export function postCampus (campus, history){

	return function thunk (dispatch){
		return axios.post('./api/campuses', campus)
		.then(res => res.data)
		.then(newCampus =>{
			dispatch(getcampus(newCampus));
			history.push(`/campuses/${newCampus.id}`)
		});
	}
}

export default function reducer (state = [], action) {
	let newState = Object.assign([], state)
	switch (action.type) {
		case GET_CAMPUSES:
		 newState = [...action.theCampuses]
		 break;
		case GET_CAMPUS:
		 newState.campuses = [...newState.campuses, action.theCampus]
		 break;
		default:
			return state;
	}
	return newState;
}