const UPDATE_STUDENT = 'UPDATE_STUDENT'

export function updateStudent(student){
    return {
        type: UPDATE_STUDENT,
        student
    }
}

export function updatingStudent(info){
    axios.put(`/students/${info.id}`)
    .then(() => {
        dispatch()
    })
}

export default function reducer (state= '', action){
    const newState = Object.assign('', state)
    switch (action.type){
        case UPDATE_STUDENT:
            newState.student = action.student
            break;
        default:
            return newState;
    }
    return newState;
}