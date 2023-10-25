import { useReducer } from 'react'

// function reducerFunction(prevState, action) {

//     return prevState + action

// }
function counterReducer(prevState, action) {

    console.log({ prevState }, { action })

    switch (action.type) {
        case "ADD":
            { return prevState + action.value }


        case "SUBTRACT":
            {
                return prevState - action.value
            }

        case "RESET":
            {
                return 0
            }


        default:
            throw new Error("Invalid Action Type");
    }
}

function ReducerCounter() {

    // const [state, setState function = dispatch] = useReducer(reducerFunction,initial Value)

    const [counter, dispatchCounter] = useReducer(counterReducer, 0)
    //  dispatch function === action

    function Add() {

        dispatchCounter({ type: "ADD", value: 1 })

    }


    function Subtract() {

        dispatchCounter({ type: "SUBTRACT", value: 1 })

    }

    function RESET() {

        dispatchCounter({ type: "RESET" })

    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={Add}><p>Add</p></button>
            <button onClick={Subtract}><p>Subtract</p></button>
            <button onClick={RESET}><p>RESET</p></button>
        </div>
    )
}

export default ReducerCounter