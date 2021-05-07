export default function fetchTeacher(teacherId) {  
    //HARD CODED, CREATE A LOGIN PROCESS TO SET A TEACHER ID STATE
    let url = `https://hhma-api.herokuapp.com/api/v1/teachers/${teacherId}`

    return(dispatch) => {      
        dispatch({ type: "LOADING_TEACHER" })
        fetch(url)
        .then(response => response.json())
        .then(teacher => { 
            dispatch({ 
                type: 'CHANGE_TEACHER', 
                teacher
            }) 
        })
    }
}

