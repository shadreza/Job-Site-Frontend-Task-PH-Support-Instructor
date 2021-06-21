import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { AllUserContext, UserContext } from '../../App';
import './LogIn.css';

const LogIn = () => {

    let history = useHistory();
    const user = useContext(UserContext)
    const [loggedInUser , setLoggedInUser] = useState(user[0])
    const setUser = () => {
        setLoggedInUser(user[0])
    }
    useEffect(()=> {
        setUser()
    },[user[0]])

    const ALLUSER = useContext(AllUserContext)
    const [allUser , setAllUser] = useState([])
    const setALLUser = () => {
        setAllUser(ALLUSER[0])
    }
    useEffect(()=> {
        setALLUser()
    },[ALLUSER[0]])
    const tryToLogIn = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        for(let i =0 ;i <allUser.length; i++) {
            if(allUser[i].email === email && allUser[i].password === password) {
                const newUser = {
                    name : allUser[i].name,
                    email: allUser[i].email,
                    image: allUser[i].image,
                    role : allUser[i].role,
                    password : allUser[i].password
                  }
                console.log(newUser)
                setLoggedInUser({
                    ...loggedInUser,
                    name : allUser[i].name,
                    email: allUser[i].email,
                    image: allUser[i].image,
                    role : allUser[i].role,
                    password : allUser[i].password
                })
                console.log(loggedInUser)
                alert('Log in Successfull'+setLoggedInUser.name)
                history.push('/');
                // return
            }
        }
        alert('Wrong credentials')
    }
    
    return (
        <div className='logInPage'>
            <div className="login">
                <div className="email">
                    <p>email : </p>
                    <input id='email' type="email" />
                </div>
                <div className="password">
                    <p>password : </p>
                    <input id='password' type="password" />
                </div>
                <button onClick={()=>{tryToLogIn()}}>Log In</button>
                <small>don't have an account?</small>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default LogIn;