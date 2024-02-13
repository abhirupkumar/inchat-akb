import React, { useState } from 'react';
import "./App.css"
import Chat from './components/Chat';
import Main from './components/Main';


function App() {

  const [chat, setChat] = useState(false);

  return (
    <div className="App">
      {chat == "" ? <Main chat={chat} setChat={setChat} /> : <Chat />}
    </div >
  );
}

export default App;