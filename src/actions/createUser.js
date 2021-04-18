function createUser(user) {
    let configObj = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" }
    }

    return(dispatch) => {
        dispatch({ type: "LOADING_USER" })
        fetch('http://127.0.0.1:3001/api/v1/users', configObj )
        .then(response => response.json())
        .then(json => { 
            console.log(json) 
            if (json.user) {
                dispatch({ 
                    type: 'CHANGE_LOGIN', 
                    user: json
                }) 
            }  
            // add user to session hash (find secure session methods)
        }) 
    }
}

export default createUser

//dispatch({ type: 'ADD_USER', courses: json})