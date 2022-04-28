import { useState } from "react"
export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleCountUp = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleCountDown = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return (
        <>
            <span>{count}</span>
            <button
                onClick={() => handleCountUp()}
            >
                +
            </button>
            <button
                onClick={() => handleCountDown()}
            >
                -
            </button>
        </>
    )
}