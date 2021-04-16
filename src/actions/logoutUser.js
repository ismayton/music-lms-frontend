export default function logoutUser() {  
    return(dispatch) => {      
        dispatch({ 
            type: 'LOGOUT'
        })
    }      
}