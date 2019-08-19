const initState = {
    phoneId : '',
    phone : '',
    phoneCpu : '',
    phoneRam : '',
    phoneCamera : '',
    phoneBattery : '',
    phoneImg : '',
    ImgPreview : '',
}

const currentMobile = (state = initState , action) => {
    switch (action.type) {
        case 'CURRENT_CHANGE':
            return {...state,...action.payloadInit};
        default:
            return state;
    }
}

export default currentMobile;