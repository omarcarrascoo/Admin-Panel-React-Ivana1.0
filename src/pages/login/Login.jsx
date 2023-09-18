import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { login } from '../../redux/apiCalls'

function Login() {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispathch = useDispatch()
    // const handdleClick = (e) =>{
    //     e.preventDefault()
    //     login(dispathch, {username, password})
    //     const localStorageValue = localStorage.getItem("persist:root");
    //     const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
    //     const user = parsedValue.user || "";
    //     const currentUser = user ? JSON.parse(user).currentUser : {};
    //     const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
    //     if(TOKEN){
    //         // '/dashboard';
    //         history.push('/panel/dashboard');
    //         window.location.reload()
    //     }
    //     // history.push('/panel/dashboard');
        
    // }
    const handdleClick = async (e) => {
        e.preventDefault();
        await login(dispathch, { username, password });
        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
        if (TOKEN) {
          history.push('/panel/dashboard');
          window.location.reload();
        }
      };
      
  return (
        <div className="panelLogin">
            <div className="panelLoginContainer">
                <img src="https://ivanatovillaart.com/public/images/logo-ivana.png" alt="Logo Industrilux" />
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='example@gmail.com' onChange={(e)=> setUsername(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
                    <button onClick={handdleClick} className='btn'>Login</button>
                </form>
            </div>
        </div>
  )
}

export default Login
