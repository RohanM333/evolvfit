import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDishes } from '../../data/actions/dishes';
import { logout } from '../../data/actions/user';
import {
    NavLink
  } from "react-router-dom";
import './user.css'

const User = () => {
    const dispatch = useDispatch();
    const dishes = useSelector((state) => state.dishes);
    const user = useSelector((state) => state.user);
    const [dishData, setDishData] = useState({ id: 0 , name: '', protein: '', carbs: '', fats: '', calories: '' });
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getDishes())
        setDishData(dishes)
    }, [setDishData]);

    const handleChange = (e) => { 
        setSearch(e.target.value)
    }

    const filterDishes = dishes.filter(dish =>(
       dish.name.toLowerCase().includes(search.toLowerCase())
    ))


    return  (user) ? (
        <>
        <div id='user'>
            <div id='header'>                
                <NavLink to= '/' id='logout'  onClick={()=>dispatch(logout())}>Logout</NavLink>
            </div>

            <div>
                <input id='input' type="text" placeholder="Search Dish"  value ={search} onChange={handleChange}/>
            </div>

            <div className="card-container">

                {filterDishes.map((dish) => (
                    <div className="card"  key={dish.id} filterDishes={dish}>
                        <div id="name">
                            <h1>{dish.name}</h1>
                        </div>

                        <div id="info">
                            <h6>Protein:{dish.protein}</h6>
                            <h6>Carbs:{dish.carbs}</h6>
                            <h6>Fats:{dish.fats}</h6>
                            <h6>Total Calories:{dish.calories}</h6>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
        </>)
     : <> <h1 id='please'>Please Login First</h1> <NavLink to= '/login' id='logout' >Login</NavLink> </>}


export default User
