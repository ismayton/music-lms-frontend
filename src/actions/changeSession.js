const changeSession = (session) => {
    return(dispatch) => {
        dispatch({type: "CHANGE_SESSION", session: session})
    }
}

export default changeSession