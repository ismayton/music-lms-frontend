export default function fetchUser(userId) {  
    //HARD CODED, CREATE A LOGIN PROCESS TO SET A TEACHER ID STATE
    let url = 'http://127.0.0.1:3000/api/v1/users/2'

    return(dispatch) => {      
        dispatch({ type: "LOADING_USER" })
        fetch(url)
        .then(response => response.json())
        .then(user => { 
            dispatch({ 
                type: 'CHANGE_USER', 
                user
            }) 
        })
    }
}

