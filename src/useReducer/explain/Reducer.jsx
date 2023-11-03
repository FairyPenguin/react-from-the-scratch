import { useReducer } from 'react'

// Reducer function lives here outside of the component 
// useState Logic but happens in a seprate function  
// before thesetState phase

function reducerFunc(prevState, action) {

    // wrapping the prevState and action like Objects 
    // will return them in a {Key: Value } style
    console.log({ prevState }, { action })

    
    if (action.type === "add") {
        return action.value + prevState
    } else {
        throw new Error("Invalid action type!")
    }



    // return action

    // return prevState + action
}

function Reduceit() {

    const [counter, dispatch] = useReducer(reducerFunc, 1)

    // useReducer => takes 3(2 Mian) arguments and return:
    // 1- statevalue === state variable
    // 2- dispatch = setState Fucntion = function 

    //Arguments 
    // 1- reducerFunc = function (first Agrument)
    // 2- 1 = initial Value (second Argument)

    // * 3- The third argument is a (Call-back functionn 
    //that generate the initial state) rather than pass it directly you can call a function that generate it
    // in-directly
    function add() {

        // setCounter(counter + 1)
        // setCounter(1)
        // dispatch function contains = returns the object which
        // tells react what to do with the next State
        dispatch({ type: "add", value: 1 })
        // the second argument = the action 
        // the prevSatate = first Argument will be 
        //filled by React 
    }


    return (
        <div>
            <h2>useReducer</h2>
            <h2>Count: {counter}</h2>
            <button onClick={add}></button>
        </div>
    )
}

export default Reduceit