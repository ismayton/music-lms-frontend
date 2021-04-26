export default function createUser(user) {
    let url = 'http://127.0.0.1:3001/api/v1/users'

    let configObj = {
        method: 'POST',
        headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user),
    }

    return(dispatch) => {
        dispatch({ type: "LOADING_SESSION" })
        fetch(url, configObj )
        .then(response => response.json())
        .then(json => { 
            dispatch({ 
                type: 'UPDATE_SESSION',
                user: json
            }) 
        }) 
    }
}