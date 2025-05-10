import React, { useState } from 'react'
import "./counter.css"

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement(): void {
        setCount(count + 1);
    }

    function handleDecrement(): void {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleReset(): void {
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <h1 className='counter-title'>Counter</h1>
            <p className='counter-value'>Counter: {count} </p>
            <div className='counter-buttons'>
                <button onClick={handleIncrement}>➕</button>
                <button onClick={handleDecrement}>➖</button>
                <button onClick={handleReset}>🔁</button>
            </div>
        </div>
    );
}

export default Counter
