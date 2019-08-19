const initState = {
    name : '',
    login : false,
    token : ''
}

const currentUser = (state = initState , action) => {
    switch (action.type) {
        case 'CURRENT_USER_UPDATE':
            return {...state,...action.payloadUser};  
        default:
            return state;
    }
}

export default currentUser