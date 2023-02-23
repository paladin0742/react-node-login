import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Home() {
    const [useremail, setuseremail] = useState('');
    const [userpwd, setuserpwd] = useState('');

    let navigate = useNavigate();

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', background: 'rgb(165 165 217)'}}>
            <span style={{fontWeight: 700, fontSize: 30, color: 'white'}}>Welcome to My Homepage!</span>
        </div>
    );
}

export default Home;
