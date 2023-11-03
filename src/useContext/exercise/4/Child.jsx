import { useContext } from "react"
import { ParentContext } from "./Parent"




function Child() {
    const [state, UP] = useContext(ParentContext)

    return (
        <div>
            <h1>Child</h1>
            <h2>Counter: {state}</h2>
            <button
                onClick={UP}
            >Click or it will Stick</button>
        </div>
    )
}

export default Child