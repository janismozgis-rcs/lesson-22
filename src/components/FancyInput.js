import { useState } from 'react';

function FancyInput() {
    const [text, setText] = useState('Hello world!');

    const changeText = (event) => {
        console.log(event.target.value);
        // setText(event.target.value);
    }

    return (
        <div>
            <h2>{text}</h2>
            <input type="text" value={text} onChange={changeText} />
            <input type="text" />
        </div>
    )
}

export default FancyInput;