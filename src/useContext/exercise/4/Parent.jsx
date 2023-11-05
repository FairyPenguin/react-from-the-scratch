import { createContext, useReducer } from 'react'
import Child from './Child'

const ParentContext = createContext()

function reducerFunc(prevState, action) {

    console.log({ prevState }, { action })

    if (action.type === "Add") {
        return action.value + prevState
    } else
        throw new Error("Invalid action type!")

}

function Parent() {

    const [state, dispatch] = useReducer(reducerFunc, 0)



    return (

        <div>
            <h2>Parent</h2>

            {/* Other solution is you pass the Dispatcher function only */}
            {/* as a value  */}

            <ParentContext.Provider
                value={dispatch}>
                <h2>Counter: {state}</h2>

                <Child />
            </ParentContext.Provider>
        </div>

    )
}

export default Parent

export { ParentContext }