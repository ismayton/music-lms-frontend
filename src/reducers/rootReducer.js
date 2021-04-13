const rootReducer = (state = { courses: [], loading: false, session: 'logged_out' }, action) => {
    switch(action.type) {
        case 'LOADING_COURSES':
            return {
                ...state,
                courses: [],
                loading: true
            }

        case 'CHANGE_COURSES':
            console.log(action)
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
                loading: false
            }
            
        default: return state;
    }
}

export default rootReducer