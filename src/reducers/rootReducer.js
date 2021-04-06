const rootReducer = (state = { courses: [], loading: false, session: {} }, action) => {
    switch(action.type) {
        case 'LOADING_COURSES':
            return {
                ...state, 
                loading: true
            }

        case 'ADD_COURSES':
            return {
                ...state,
                courses: action.courses,
                loading: false
            }

        default: return state;
    }
}

export default rootReducer