import { useState, useEffect } from 'react';


function UseEffectCounter() {

    const [count, setCount] = useState(0)

    useEffect(
        () => {
            console.log("Component Mounted Successfully")
        }, []
    )

    useEffect(
        () => {
            console.log("Counter state changed, Oh geeez")
        }, [count]
    )

    function clickHandler() {


        setCount(prevCount => prevCount + 1)


    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler}
                style={{ color: "whitesmoke", fontSize: "2rem" }}>
                <p>Click</p>
            </button>
        </div>
    )
}

export default UseEffectCounter