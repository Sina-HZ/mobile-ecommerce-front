
const mobiles = (state = [] , action) => {
    switch (action.type) {
        case 'FIRST_LOAD':
            return [...state,...action.payload];
        case 'ADD_NEW_MOBILE':
            let addedMobile = state.concat(action.payloadInfo);
            return addedMobile;
        case 'REMOVE_MOBILE':
            return state = action.newlist;
        case 'EDIT_MOBILE_INFO':
            let newMobile = [action.payload];
            const newState = state.filter(item => {return item._id !== action.payload._id});
            return [...newState,...newMobile];
        default:
            return state;
    }
}

export default mobiles;