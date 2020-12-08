import { useState } from 'react';

function Task2() {
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
            <button onClick={changeText}>{text}</button>
        </div>
    )
}

export default Task2;