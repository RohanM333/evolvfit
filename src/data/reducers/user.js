import { LOGIN ,LOGOUT } from '../constants/actionTypes';

export default (permission = false, action) => {
  switch (action.type) {
    case LOGIN:
      return permission = true;
    case LOGOUT:
      return permission = false;
    default:
      return permission;    
  } 
};