const updateLesson = (lessonId, subId) => {  
    let url = `http://127.0.0.1:3001/api/v1/subscriptions/${subId}`
    let configObj = {
        method: 'PATCH',
        headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({subscription_id: subId, lesson_id: lessonId})
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
        })
    }
}

export default updateLesson