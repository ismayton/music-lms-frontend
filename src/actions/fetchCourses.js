const fetchCourses = () => {  
    let url = 'https://hhma-api.herokuapp.com/api/v1/courses'
    
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