import { useState } from 'react';

function Atm() {
    const [amount, setAmount] = useState(0);

    // const changeAmount = (change) => {
    //     setAmount(amount + change);
    // }
    // return (
    //     <div>
    //         <button onClick={() => {changeAmount(-5)}}>-5</button>
    //         <button onClick={() => {changeAmount(-1)}}>-1</button>
    //         <strong>{amount}</strong>
    //         <button onClick={() => {changeAmount(1)}}>+1</button>
    //         <button onClick={() => {changeAmount(5)}}>+5</button>
    //     </div>
    // );    

    const subtractFive = () => {
        setAmount(amount - 5);
    }
    const subtractOne = () => {
        setAmount(amount - 1);
    }
    const addFive = () => {
        setAmount(amount + 5);
    }
    const addOne = () => {
        setAmount(amount + 1);
    }

    return (
        <div>
            <button onClick={subtractFive}>-5</button>
            <button onClick={subtractOne}>-1</button>
            <input value={amount} onChange={() => {}}/>
            <button onClick={addOne}>+1</button>
            <button onClick={addFive}>+5</button>
        </div>
    );
}

export default Atm;