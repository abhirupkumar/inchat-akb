import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://inchat-backend.vercel.app/');

function Chat() {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');


    useEffect(() => {
        socket.on('receive', data => {
            console.log(data)
            const msg = {
                text: data.message,
                style: "left"
            }
            setMessages([...messages, msg])
        })
    }, [messages]);

    const sendMessage = () => {
        const msg = {
            text: messageText,
            style: "right-mine"
        }
        setMessages([...messages, msg]);
        socket.emit('send', messageText);
        setMessageText('');
    };

    return (
        <div className="">
            <nav>
                <img className="logo" src="logo.png" alt="InChat" />
                <h1>Welcome to InChat</h1>
            </nav>
            <div className="container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.style}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="send">
                <div id="send-container">
                    <input
                        type="text"
                        name="messageInp"
                        id="messageInp"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type your message..." />
                    <button className="btn" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;