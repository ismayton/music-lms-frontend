export default function createUser(user) {
    let url = 'https://hhma-api.herokuapp.com/api/v1/users'

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