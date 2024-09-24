import { useState } from "react";

const Button = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 5);
    };

    const handleDecrement = () => {
        setCount(count - 5);
    };

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment by 5</button>
            <button onClick={handleDecrement}>Decrement by 5</button>
        </div>
    )
}

export default Button