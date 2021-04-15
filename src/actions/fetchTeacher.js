export default function fetchTeacher(teacherId) {  
    //HARD CODED, CREATE A LOGIN PROCESS TO SET A TEACHER ID STATE
    let url = 'http://127.0.0.1:3000/api/v1/teachers/2'

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

