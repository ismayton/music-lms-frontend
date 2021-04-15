const fetchSession = (session) => {
    let url
    // UPDATE THIS METHOD TO TAKE A LOG IN (STRETCH GOAL) //
    if (session === "user") {
        url = 'http://127.0.0.1:3001/api/v1/users/1'
    } else if (session === "teacher") {
        url = 'http://127.0.0.1:3001/api/v1/teachers/2'
    } else {
        url = 'http://127.0.0.1:3001/api/v1/courses'
    }

    return(dispatch) => {      
        dispatch({ type: "LOADING_SESSION" })
        fetch(url)
        .then(response => response.json())
        .then(json => { 
            dispatch({ 
                type: 'CHANGE_SESSION', 
                session: session,
                user: json
            }) 
        })
    }
}

export default fetchSession


