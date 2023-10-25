import { useState, useEffect } from 'react';


function Interval() {
    const [count, setCount] = useState(0)

    useEffect(
        () => {

            const timer = setInterval(() => {
                console.log("Interval Says Hello")
            }, 100000 )

            return () => {
                clearInterval(timer)

            }
        }, [])


    function clickHandler() {

        setCount(prevCount => prevCount + 1)

    }

    return (
        <div>
            <h1>{count}</h1>

            <button style={{
                color: "whitesmoke",
                fontSize: "2rem"
            }} onClick={clickHandler}>
            </button>
        </div>
    )
}

export default Interval