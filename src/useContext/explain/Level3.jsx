import { createContext } from "react"
import Level2 from "./Level2"

const AuthContext = createContext()

const authState = {
    "userID": 123,
    "loggedIn": true
}

function Level3() {


    return (
        <>
            <h1>Level3</h1>
            <AuthContext.Provider value={authState}>

                <Level2 />
            </AuthContext.Provider>

        </>
    )
}

export default Level3

export { AuthContext };