import { createContext, useReducer, useState } from 'react'
import Child from './Child'

const ParentContext = createContext()

function reducerFunc(action, prevState) {

    console.log({ prevState }, { action })

    if (action.type === "add") {
        return action.value + prevState
    } else
        throw new Error("Invalid action type!")

}

function Parent() {

    const [state, dispatch] = useReducer(reducerFunc, 0)

    function UP() {

        dispatch({
            type: "add",
            value: 1
        })

    }

    return (

        <div>
            <h2>Parent</h2>

            <ParentContext.Provider
                value={[state, UP]}>
                <Child />
            </ParentContext.Provider>
        </div>

    )
}

export default Parent

export { ParentContext }