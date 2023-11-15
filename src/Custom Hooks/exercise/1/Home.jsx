import { useState } from "react"
import UseRerenderLogger from "./useRerenderLogger"


function Home() {

    const [click, setClick] = useState(0)

    const logger = UseRerenderLogger("Home")

    function clickHandler() {

        setClick((prevState) => prevState + 1)
    }

    return (
        <div>
            <h3>Home</h3>
            <p>{click}</p>
            <button
                onClick={clickHandler}
            >
                <p>Click!</p>
            </button>
        </div>

    )
}

export default Home