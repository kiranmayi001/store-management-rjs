import React, { useState } from 'react'
import './Login.css'

export default function Login(props) {

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(false);

    const handleInputChange = e => {
        if(e.target.name==='username') 
            return setUsername(e.target.value);
        if(e.target.name==='pwd')
            return setPwd(e.target.value);
    }

    const loginUser =  e => {
        e.preventDefault();
        setError(false);
        if(username!==pwd)
            return setError('credentials invalid');
        if(username==='test-admin') {
            localStorage.setItem('loggedIn', JSON.stringify({ username: username, role: 'admin'}));
            props.history.push('/dashboard/admin');
        }
        else if(username==='test-sales') {
            localStorage.setItem('loggedIn', JSON.stringify({ username: username, role: 'exec'}));
            props.history.push('/dashboard/executive');
        }
        else setError('user unauthorized');
    };

    return (
        <div className="LoginSection">
               <div className="FormWrapper">
                <form className="LoginPage" >

                    <h1 className="Heading">Login</h1>
              
                    <input className="InputField" type="text" name="username" placeholder="Enter Username" value={username} onChange={handleInputChange}/><br />
                
        
                    <input className="InputField" type="password" name="pwd" placeholder="Enter Password" value={pwd} onChange={handleInputChange} /><br />
                 
                    <p style={{color:'red', fontSize:'12px'}}>{error}</p>
                    <button className="SubmitBtn" onClick={loginUser}>Login</button>


                </form>
            </div>
        </div>
    )
}
