const initState = {
    modify : false,
    formButton : "primary",
    formButtonTittle : "Add New",
}

const flags = (state = initState , action) => {
    switch (action.type) {
        case 'MODIFY_FLAG_CHANGE':
            return {...state,...action.payloadModify};
        default:
            return state;
    }
}

export default flags;