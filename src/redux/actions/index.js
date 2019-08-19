
export const firstLoad = (list) => {
    return {
        type : 'FIRST_LOAD',
        payload : list
    }
}

export const addMobile = (info) => {
    return {
        type : 'ADD_NEW_MOBILE',
        payloadInfo : info
    }
}

export const removeMobile = (array) => {
    return {
        type : 'REMOVE_MOBILE',
        newlist : array
    }
}

export const editMobile = (obj) => {
    return {
        type : 'EDIT_MOBILE_INFO',
        payload : obj
    }
}

export const editCurrent = (obj) => {
    return {
        type : 'CURRENT_CHANGE',
        payloadInit : obj
    }
}

export const editModifyFlag = (obj) => {
    return {
        type : 'MODIFY_FLAG_CHANGE',
        payloadModify : obj
    }
}

export const editUser = (obj) => {
    return {
        type : 'CURRENT_USER_UPDATE',
        payloadUser : obj
    }
}
