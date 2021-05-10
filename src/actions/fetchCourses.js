export default function fetchCourses() {  
    let url = 'https://hhma-api.herokuapp.com/api/v1/courses'
    let configObj = {
            method: 'GET',
            headers:  {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }

    // Where is the fetch request going wrong from the server? check on ACAO and fetch response //
    return(dispatch) => { 
        dispatch({ type: "LOADING_COURSES" })
        fetch(url, configObj)
            .then(response => response.json())
            .then(json => {
                dispatch({ 
                    type: 'CHANGE_COURSES', 
                    courses: json
                }) 
            })
    }
}