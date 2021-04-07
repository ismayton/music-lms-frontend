const fetchCourses = () => {
    return(dispatch) => {
        dispatch({ type: "LOADING_COURSES" })
        fetch('http://127.0.0.1:3000/api/v1/teachers/2/courses')
        .then(response => response.json())
        .then(json => { dispatch({ type: 'ADD_COURSES', courses: json }) })
    }
}

export default fetchCourses