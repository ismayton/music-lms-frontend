const rootReducer = (state = { courses: [], loading: false, user: null }, action ) => {
    switch(action.type) {
        // COURSES //
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

        // TEACHER //
        case 'LOADING_TEACHER':
            return {
                ...state,
                loading: true,
            }

        case 'CHANGE_TEACHER':
            return {
                ...state, 
                loading: false,
                user: action.teacher
            }

        // SESSION //
        case 'LOADING_SESSION':
            return {
                ...state,
                loading: true
            }

        case 'UPDATE_SESSION':
            return {
                ...state, 
                loading: false,
                user: action.user
            }

        case "LOGOUT":
            return {
                ...state,
                user: null
            }
 
        // SUBSCRIPTION //
        case "LOADING_SUBSCRIPTION":
            return {
                ...state,
                loading: true
            }

        case "UPDATE_SUBSCRIPTIONS":
            return {
                ...state,
                user: action.user
            }

        // LESSON PROGRESS (dispatched from course) //

        case "UPDATE_SUBSCRIPTION":
            return { 
                ...state,
                loading: false,
                user: action.user
            }

        case "RENDER_ERROR":
            return {
                ...state,
                error: action.error
            }
            
        default: return state;
    }
}

export default rootReducer