import React from 'react';

const Message = ({ text, style }) => {
    if (text == "") return;
    return (
        <>
            <div className={`message ${style}`}>
                {text}
            </div>
        </>
    );
};

export default Message;