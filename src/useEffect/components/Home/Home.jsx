import { useState, useEffect } from 'react'

import Section from '../Section/Section'

function Home() {

    const [count, setCount] = useState(0)

    useEffect(
        () => {
            console.log("Home re-rendred")

        })

    function clickHandler() {

        setCount(prevCount => prevCount + 1)

    }

    return (
        <div>

            <h1>  Visits: {count} </h1>

            <button onClick={clickHandler}>
                +
            </button>

            <Section />
        </div>
    )
}

export default Home