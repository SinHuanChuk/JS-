import React from 'react';

const Other = ({books}) => (
    <ul>
        {books.map((el) => (
            <li key = {el.id}>{el.name}</li>
        ))}
    </ul>
)

export default Other