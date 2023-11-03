import { useContext } from 'react'
import { MyContext } from "./Parent"




function Child() {

    const [parentState, setparentState] = useContext(MyContext) 


    function handleClick() {

        setparentState("This is the End")

    }

    return (
        <div>
            <h2>Child</h2>
            <p>{parentState}</p>
            <button onClick={handleClick}>
                <p>clickme,and Magic happens</p>
            </button>
        </div>
    )
}

export default Child