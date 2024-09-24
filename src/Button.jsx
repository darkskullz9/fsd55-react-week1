import { useState } from "react";

const Button = ({setCount}) => {
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment by 5</button>
            <button onClick={handleDecrement}>Decrement by 5</button>
        </div>
    )
}

export default Button