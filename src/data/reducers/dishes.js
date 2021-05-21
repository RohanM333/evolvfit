import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (dishes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...dishes, action.payload];
    case UPDATE:
      return dishes.map((dish) => (dish.id === action.payload.id ? action.payload.dish : dish));
    case DELETE:
      return dishes.filter((dish) => dish.id !== action.payload);
    default:
      return dishes;    
  } 
};


