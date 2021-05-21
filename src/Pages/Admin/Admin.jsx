import React, { useState, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDishes,createDish,updateDish,deleteDish } from '../../data/actions/dishes';
import { logout } from '../../data/actions/user';
import {
    NavLink
  } from "react-router-dom";
import './admin.css'

const Admin = () => {
    const dispatch = useDispatch();
    const dishes = useSelector((state) => state.dishes);
    //localStorage.setItem('dishes',dishes)  
    const user = useSelector((state) => state.user);
    const [dishData, setDishData] = useState({ id: 0 ,name: '', protein: '', carbs: '', fats: '', calories: ''});
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getDishes())

        setDishData(dishes)      

    }, [setDishData]);


    const clear = () => {
        setDishData({ id: 0 , name: '', protein: '', carbs: '', fats: '', calories: '' });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = Math.floor(Math.random()*10000);

        dispatch(createDish(id,dishData));
        clear();
      };

    return (user) ? (
    <>
        <div id='admin'>
            <div id='panel'>
                <h1>DASHBOARD</h1>
                <NavLink to= '/' id='logout'  onClick={()=>dispatch(logout())}>Logout</NavLink>
            </div>

            <div id='form-container'>
                <form id='form' onSubmit={handleSubmit}>

                    <label> Dish Name: </label><br/>

                    <input className='input-fields' type="text" id="dish" name="dish" value={dishData.name} 
                    onChange={(e) => setDishData({...dishData ,name: e.target.value })} />

                    <label> Protein: </label><br/>

                    <input className='input-fields' type="text" id="protein" name="protein" value={dishData.protein} 
                    onChange={(e) => setDishData({...dishData ,protein: e.target.value })} />

                    <label> Carbs: </label><br/>

                    <input className='input-fields' type="text" id="carbs" name="carbs" value={dishData.carbs} 
                    onChange={(e) => setDishData({...dishData ,carbs: e.target.value })}/>

                    <label> Fats: </label><br/>

                    <input className='input-fields' type="text" id="fats" name="fats" value={dishData.fats} 
                    onChange={(e) => setDishData({...dishData ,fats: e.target.value })}/>

                    <label> Calories: </label><br/>

                    <input className='input-fields' type="text" id="calories" name="calories" value={dishData.calories} 
                    onChange={(e) => setDishData({...dishData ,calories: e.target.value })}/><br/>

                    
                    {!show ? <button className='table-button-form' type="submit" >Add Dish</button> : null}
                    
                    
                </form>

                {show ? <button className='table-button-form'
                        onClick={() => {dispatch(updateDish(dishData.id,dishData));clear();
                                        setShow(false);}}
                        >Edit Dish
                        </button> : null}
            </div>

            <div>
                <table >
                    <thead>
                        <tr>
                            <th>DISH</th>
                            <th>PROTEIN</th> 
                            <th>CARBS</th>
                            <th>FATS</th>
                            <th>TOTAL CALORIES</th>
                            <th>EDIT DISH</th>
                            <th>DELETE DISH</th>
                        </tr>
                    </thead>

                    <tbody>
                        {dishes.map((dish) => (
                            <tr key={dish.id}>
                                <td>{dish.name}</td>
                                <td>{dish.protein}</td>
                                <td>{dish.carbs}</td>
                                <td>{dish.fats}</td>
                                <td>{dish.calories}</td>
                                <td><button className='table-button' onClick={() => {setDishData({ id: dish.id , name: dish.name, protein: dish.protein, carbs: dish.carbs, fats: dish.fats, calories: dish.calories }) ; setShow(true);} }>Edit</button></td>
                                <td><button className='table-button'onClick={() => dispatch(deleteDish(dish.id))}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>

        </div>
    </>) 
    : <> <h1 id='please'>Please Login First</h1> <NavLink to= '/login' id='logout' >Login</NavLink> </>}



export default Admin
