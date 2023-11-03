import { useContext } from "react"
import { AuthContext } from "./Level3"
import Level1 from "./Level1"


function Level2() {

    const ctx = useContext(AuthContext)
    console.log(ctx)

    return (
        <>
            <h1>{ctx}</h1>

            <Level1 />
        </>

    )
}

export default Level2