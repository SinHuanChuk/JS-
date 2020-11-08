import React from 'react';

const Operation = ({name, unreadMessages = ''}) => (
    <div>
        <h2>Hello {name}</h2>
        <p>
            {unreadMessages.length > 0 
            ? `you have ${unreadMessages} please answer him`
            : `you dont have any message`}
        </p>
    </div>
)

export default Operation