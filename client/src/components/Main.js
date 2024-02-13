import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io('http://localhost:5000');
const socket = io('https://inchat-backend.vercel.app');

function Main({ chat, setChat }) {
    const [username, setUsername] = useState('');
    const handleUsername = (e) => {
        const name = username;
        socket.emit('new-user-joined', name);
        setChat(true);
    }
    return (
        <div className='App-container'>
            <div>
                <img className="logo" src="logo.png" alt="InChat" />
                <h2>Welcome to InChat</h2>
            </div>
            <input className='App-input' type="text" placeholder="Enter your name" onChange={(e) => { setUsername(e.target.value) }} />
            <button className='App-btn' onClick={handleUsername}>Start Chatting</button>
        </div>
    );
}

export default Main;