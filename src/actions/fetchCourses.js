const fetchCourses = (params) => {
    let url
    if (params === "user") {
        url = 'http://127.0.0.1:3000/api/v1/users/1/courses'
    } else if (params === "teacher") {
        url = 'http://127.0.0.1:3000/api/v1/teachers/2/courses'
    } else {
        url = 'http://127.0.0.1:3000/api/v1/courses'
    }

    return(dispatch) => {
        dispatch({ type: "LOADING_COURSES" })
        fetch(url)
        .then(response => response.json())
        .then(json => { dispatch({ type: 'ADD_COURSES', courses: json }) })
    }
}

export default fetchCourses