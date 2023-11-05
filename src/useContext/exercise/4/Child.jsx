import { useContext } from "react"
import { ParentContext } from "./Parent"




function Child() {
    
    const Dispatch = useContext(ParentContext)


    function UP() {

        Dispatch({
            type: "Add",
            value: 1
        })

    }

    return (
        <div>
            <h1>Child</h1>
            <button style={{ color: "wheat" }}
                onClick={UP}
            >Click or it will Stick</button>
        </div>
    )
}

export default Child