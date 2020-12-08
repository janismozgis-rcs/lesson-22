import React, { useState } from 'react';

function Task1() {
    const [text, setText] = useState('Foo');
    
    const changeText = () => {
        if (text === 'Foo') {
            setText('Bar');
        } else if (text === 'Bar') {
            setText('Baz');
        } else {
            setText('Foo');
        }
    }

    return (
        <div>
            <h2>{text}</h2>
            <button onClick={changeText}>Click me!</button>
        </div>
    )
}

export default Task1;