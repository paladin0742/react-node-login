import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [useremail, setuseremail] = useState('');
    const [userpwd, setuserpwd] = useState('');
    const [invalidEmail, setinvalidEmail] = useState(' ');
    const [invalidPwd, setinvalidPwd] = useState(' ');

    let navigate = useNavigate();

    async function funcLogin() {
        const user = {name: useremail, password: userpwd};
        console.log(user);
        if (!useremail)
            alert('Please input email address!');
        if (!userpwd)
            alert('Please input password!');
        await axios.post(`http://localhost:8080/api/user`, user)
            .then(res => {
                if (res.data.status === 'failed')
                {
                    alert('Please retry login!');
                    setuseremail('');
                    setuserpwd('');
                    return;
                }
                console.log(res);
                navigate('/home');
        });
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', background: '#777777'}}>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 5}}>
                <input type='text' value={useremail} onChange={(e) => {setuseremail(e.target.value)}} id="email" style={{border: '1px solid black', borderRadius: 5, color: 'black', padding: '3px 10px'}} />
                <div>{invalidEmail}</div>
                <input type='password' value={userpwd} onChange={(e) => {setuserpwd(e.target.value)}} id="pwd" style={{border: '1px solid black', borderRadius: 5, color: 'black', padding: '3px 10px'}} />
                <div>{invalidPwd}</div>
            </div>
            <div style={{display: 'flex', width: '-webkit-fill-available', justifyContent: 'center', marginTop: 50}}>
                <div onClick={() => {funcLogin()}} style={{cursor: 'pointer', padding: '5px 15px', borderRadius: 5, background: 'rgb(4 179 219)', color: 'white', marginRight: 20}}>Log In</div>
                <div onClick={() => {navigate('/signup')}} style={{cursor: 'pointer', padding: '5px 15px', borderRadius: 5, background: 'rgb(219 93 4)', color: 'white'}}>Sign Up</div>
            </div>
        </div>
    );
}

export default Login;
