const rootReducer = (state = { courses: [], loading: false, session: 'logged_out', user: null }, action) => {
    switch(action.type) {
        case 'LOADING_COURSES':
            return {
                ...state,
                courses: [],
                loading: true
            }

        case 'CHANGE_COURSES':
        return {
                ...state,
                courses: action.courses,
                loading: false
            }

        case 'LOADING_SESSION':
            return {
                ...state,
                loading: true
            }

        case 'CHANGE_SESSION':
        return {
                ...state, 
                session: action.session,
                loading: false,
                user: action.user
            }
            
        default: return state;
    }
}

export default rootReducer