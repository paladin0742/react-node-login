import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [useremail, setuseremail] = useState('');
    const [userpwd, setuserpwd] = useState('');
    const [confirmpwd, setconfirmpwd] = useState('');

    let navigate = useNavigate();

    async function funcSignup() {
        if (userpwd !== confirmpwd)
            alert('Please retry confirm password!');
        const user = {name: useremail, password: userpwd};
        console.log(user);
        await axios.post(`http://localhost:8080/api/users`, user)
            .then(res => {
                console.log(res);
                navigate('/login');
        });
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', background: '#777777'}}>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 5}}>
                <input type='text' value={useremail} onChange={(e) => {setuseremail(e.target.value)}} id="email" style={{border: '1px solid black', borderRadius: 5, color: 'black', padding: '3px 10px'}} />
                <input type='password' value={userpwd} onChange={(e) => {setuserpwd(e.target.value)}} id="pwd" style={{border: '1px solid black', borderRadius: 5, color: 'black', padding: '3px 10px'}} />
                <input type='password' value={confirmpwd} onChange={(e) => {setconfirmpwd(e.target.value)}} id="confirmpwd" style={{border: '1px solid black', borderRadius: 5, color: 'black', padding: '3px 10px'}} />
            </div>
            <div style={{display: 'flex', width: '-webkit-fill-available', justifyContent: 'center', marginTop: 50}}>
                <div onClick={() => {funcSignup()}} style={{cursor: 'pointer', padding: '5px 15px', borderRadius: 5, background: 'rgb(4 179 219)', color: 'white', marginRight: 20}}>Register</div>
            </div>
        </div>
    );
}

export default Signup;
