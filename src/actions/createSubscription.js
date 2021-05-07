export default function createSubscription(userId, courseId) {  
    let url = `https://hhma-api.herokuapp.com/api/v1/subscriptions`

    let configObj = {
        method: 'POST',
        headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({user_id: userId, course_id: courseId})
    }

    return(dispatch) => {      
        dispatch({ type: "LOADING_SUBSCRIPTION" })
        fetch(url, configObj)
        .then(response => response.json())
        .then(json => {
                dispatch({ 
                    type: 'UPDATE_SESSION', 
                    user: json
                })
            }      
        )
    }
}