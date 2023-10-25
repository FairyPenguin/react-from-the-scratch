import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)

    }

    function subtract() {

        setCount(Math.max(count - 1, 0))


    }


    return (
        <>
            <h1>Count: {count}</h1>

            <button onClick={subtract}><p style={{ color: "white", fontSize: "2rem" }}>-</p></button>

            <span> </span>

            <button onClick={add}><p style={{ color: "white", fontSize: "2rem" }}>+</p></button>
        </>
    )
}

export default Counter