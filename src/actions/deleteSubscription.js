export default function deleteSubscription(subId, userId) {  
    let url = `http://127.0.0.1:3001/api/v1/subscriptions/${subId}`

    let configObj = {
        method: 'DELETE',
        headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({id: subId, user_id: userId})
    }

    return(dispatch) => {      
        dispatch({ type: "LOADING_SUBSCRIPTION" })
        fetch(url, configObj)
        .then(response => response.json())
        .then(json => {
                dispatch({ 
                    type: 'UPDATE_SUBSCRIPTION', 
                    user: json
                })
            }      
        )
    }
}