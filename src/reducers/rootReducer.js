import { combineReducers } from "redux";

const coursesReducer = (state = [], action ) => {
    switch(action.type) {
        // case 'LOADING_COURSES':
        //     return {...state}

        case 'CHANGE_COURSES':
            return action.courses
           
        default: return state;
    }
}

const userReducer = (state = null, action ) => {
    switch(action.type) {
        // case 'LOADING_SESSION':
        //     return {...state}

        case 'UPDATE_SESSION':
            return action.user

        case "LOGOUT":
            return null
            
        // case "LOADING_SUBSCRIPTION":
        //     return {...state}

        case "UPDATE_SUBSCRIPTIONS":
            return action.user

        case "UPDATE_SUBSCRIPTION":
            return action.user
           
        default: return state;
    }
}

// const teacherReducer = (state = null, action ) => {
//     switch(action.type) {
//         // case 'LOADING_TEACHER':
//         //     return {...state}

//         case 'CHANGE_TEACHER':
//             return action.teacher
           
//         default: return state;
//     }
// }

const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOADING_COURSES':
            return true
            
        case 'CHANGE_COURSES':
            return false
            
        case 'LOADING_TEACHER':
            return true

        case 'CHANGE_TEACHER':
            return false

        case 'LOADING_SESSION':
            return true

        case 'UPDATE_SESSION':
            return false
 
        case "LOADING_SUBSCRIPTION":
            return true

        case "UPDATE_SUBSCRIPTIONS":
            return false

        case "UPDATE_SUBSCRIPTION":
            return false
           
        default: return state;
    }
}

const rootReducer = combineReducers({
    courses: coursesReducer,
    user: userReducer,
    loading: loadingReducer
    // teacher: teacherReducer,
})

export default rootReducer