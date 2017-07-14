const CHANGE_STUDENT = 'CHANGE_STUDENT'

export function changeStudent (student){
    return {
        type: CHANGE_STUDENT,
        student
    }
}

export default function reducer (state = '', action){
    switch (action.type){
        case CHANGE_STUDENT:
            return action.student
        default:
            return state;
    }
}