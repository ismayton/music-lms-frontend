function createUser(user) {
    let configObj = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" }
    }

    return(dispatch) => {
        dispatch({ type: "LOADING_SESSION" })
        fetch('http://127.0.0.1:3001/api/v1/users', configObj )
        .then(response => response.json())
        .then(json => { 
            console.log(json) 
            if (json.user) {
                dispatch({ 
                    type: 'UPDATE_SESSION', 
                    user: json
                }) 
            }  
        }) 
    }
}

export default createUser