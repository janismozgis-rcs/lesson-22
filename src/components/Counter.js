import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(5);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={incrementCount}>Click me</button>
        </div>
    )
}

export default Counter;
