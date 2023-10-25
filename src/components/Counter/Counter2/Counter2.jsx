import { useState } from "react"

function Counter2() {

    const [count, setCount] = useState(0)

    function add() {

        setCount(prevCount => prevCount + 2)
    }

    function subtract() {

        setCount(prevCount => prevCount - 2)
    }

    return (
        <>
            <h1>Count= {count}</h1>

            <button onClick={add}><p style={{ color: "white", fontSize: "1rem" }}>add +</p></button>
            <span>||</span>
            <button onClick={subtract}><p style={{ color: "white", fontSize: "1rem" }}>subtract - </p></button>
        </>

    )
}

export default Counter2