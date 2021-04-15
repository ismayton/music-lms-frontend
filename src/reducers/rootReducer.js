const rootReducer = (state = { courses: [], loading: false, user: null }, action ) => {
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

        case 'LOADING_TEACHER':
            return {
                ...state,
                loading: true,
                user: null
            }

        case 'CHANGE_TEACHER':
            return {
                ...state, 
                loading: false,
                user: action.teacher
            }

        case 'LOADING_USER':
            return {
                ...state,
                loading: true,
                user: false
            }

        case 'CHANGE_USER':
            return {
                ...state, 
                loading: false,
                user: action.user
            }
            
        default: return state;
    }
}

export default rootReducer