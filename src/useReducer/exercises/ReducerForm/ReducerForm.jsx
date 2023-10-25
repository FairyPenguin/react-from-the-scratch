import { useReducer, useState } from 'react'


const initialState = {

    name: "",
    email: "",
    age: ""
}

function reducerFunction(prevState, action) {

    switch (action.type) {
        case "value":

            break;

        default:
            throw new Error("Invalid Action Type");
    }


}

function ReducerForm() {

    const [input, dispatchInput] = useReducer(reducerFunction, initialState)
    return (
        <div>

            <form onSubmit={reducerFunction}>


                <label htmlFor="">name
                    <input name='name' type="text" />
                </label>

                <label htmlFor="">email
                    <input name='email' type="email" />
                </label>

                <label htmlFor="">age
                    <input name='age' type="text" />
                </label>


                <button type='submit'>
                    <p>Submit</p>
                </button>

            </form>
        </div>
    )
}

export default ReducerForm