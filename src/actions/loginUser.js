export default function loginUser(user) {  
    let url = 'http://127.0.0.1:3001/api/v1/login'

    let configObj = {
        method: 'POST',
        headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }

    return(dispatch) => {      
        dispatch({ type: "LOADING_LOGIN" })
        fetch(url, configObj)
        .then(response => response.json())
        .then(json => {
                dispatch({ 
                    type: 'CHANGE_LOGIN', 
                    user: json
                })
            }      
        )
    }
}