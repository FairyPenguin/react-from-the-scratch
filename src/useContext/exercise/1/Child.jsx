import { useContext } from "react"

import { MonkeyContext } from "./Parent"

function Child() {

    const monkey = useContext(MonkeyContext)

    console.log(monkey, MonkeyContext)

    return (

        <div>
            <h1>{JSON.stringify(monkey, null, 2)} +</h1>
            <h1>Child</h1>
            <p>Context Bleow</p>
            <button>B?</button>
        </div>

    )
}

export default Child