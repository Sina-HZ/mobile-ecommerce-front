import { combineReducers } from 'redux';
import mobiles from './mobiles';
import currentMobile from './currentMobile';
import flags from './flags';
import currentUser from './currentUser';

export default combineReducers({
    mobiles,
    currentMobile,
    flags,
    currentUser
})