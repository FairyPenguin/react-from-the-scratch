import { useReducer, useState, useEffect } from 'react'
import Button from './Button/Button'


function counterReducer(prevState, action) {

    switch (action.type) {
        case "ADD": {
            return prevState + action.value
        }

        case "SUBTRACT": {
            return prevState - action.value
        }

        case "RESET": {
            return 0
        }

        default:
            throw new Error("Invalid Action Type");
    }

}


function ReducerCounter2() {

    const [count, dispatchCount] = useReducer(counterReducer, 0)





    return (
        <div>
            <h1>{count}</h1>

            <Button ButtonText={"Add"}
                dispatchCount={dispatchCount}
                action={{ type: "ADD", value: 1 }}
            />

            <Button ButtonText={"Subtract"}
                dispatchCount={dispatchCount}
                action={{ type: "SUBTRACT", value: 1 }}

            />

            <Button
                ButtonText={"RESET"}
                dispatchCount={dispatchCount}
                action={{ type: "RESET" }}
            />

        </div>)
}

export default ReducerCounter2