const rootReducer = (state = { courses: [], loading: false, session: 'logged_out' }, action) => {
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

        case 'CHANGE_SESSION':
            return {
                ...state, 
                session: action.session
            }
            
        default: return state;
    }
}

export default rootReducer