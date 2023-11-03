import { useState, createContext } from 'react'
import Child from './Child'

const MyContext = createContext()

function Parent() {

    const [parentState, setparentState] = useState("The Start")

    return (

        <div>
            <MyContext.Provider
                value={[parentState, setparentState]}>

                <Child />
            </MyContext.Provider>

        </div>
    )
}

export default Parent

export { MyContext }