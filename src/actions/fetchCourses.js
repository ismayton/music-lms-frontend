const fetchCourses = (session) => {  
    let url
    if (session === "user") {
        url = 'http://127.0.0.1:3000/api/v1/users/1/courses'
    } else if (session === "teacher") {
        url = 'http://127.0.0.1:3000/api/v1/teachers/2/courses'
    } else {
        url = 'http://127.0.0.1:3000/api/v1/courses'
    }

    return(dispatch) => {      
        dispatch({ type: "LOADING_COURSES" })
        fetch(url)
        .then(response => response.json())
        .then(json => { 
            dispatch({ 
                type: 'CHANGE_COURSES', 
                courses: json
            }) 
        })
    }
}

export default fetchCourses