import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (range = 1) => {
        setCounter((current) => current + range);
    }

    const decrement = (range = 1) => {
        console.log(counter === 0);
        if (counter === 0) return;
        setCounter((current) => current - range);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return { counter, increment, decrement, reset };

}
