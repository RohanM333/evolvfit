import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const data = [  
  {
  "id" : 1,
  "name" : 'APPLE',
  "protein" : '1 cal',
  "carbs" : '1 cal',
  "fats" : '1 cal',
  "calories" : '3 cal',
  },
  {
    "id" : 2,
    "name" : 'CAKE',
    "protein" : '2 cal',
    "carbs" : '2 cal',
    "fats" : '2 cal',
    "calories" : '6 cal',
  },
  {
    "id" : 3,
    "name" : 'CHOCOLATE ',
    "protein" : '3 cal',
    "carbs" : '3 cal',
    "fats" : '3 cal',
    "calories" : '9 cal',
  },
  {
    "id" : 4,
    "name" : 'BANANA',
    "protein" : '4 cal',
    "carbs" : '4 cal',
    "fats" : '4 cal',
    "calories" : '12 cal',
  },]



export const getDishes = () => {
    const action ={ type: FETCH_ALL , payload: data }
    return action
  };
  
  export const createDish = (id , dish) => {
    dish.id =id;
    const action ={ type: CREATE , payload : dish  }
    return action
  };
  
  export const updateDish = (id, dish) => {
    const action ={ type: UPDATE , payload: {id,dish} }
    return action
  };

  export const deleteDish = (id) => {
    const action ={ type: DELETE , payload: id }
    return action
  };