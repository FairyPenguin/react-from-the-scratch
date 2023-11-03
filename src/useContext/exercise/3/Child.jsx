import { useContext } from "react"
import { StringContext, NumberContext } from "./Parent"


function Child() {

    const String = useContext(StringContext)
    const Number = useContext(NumberContext)

    return (
        <div>
            <h2>Child</h2>

            <p>{String}</p>

            <p>{Number}</p>

        </div>
    )
}

export default Child