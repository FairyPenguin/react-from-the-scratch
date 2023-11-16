import { useRef, useState, useEffect } from 'react'

function useStateWithLogger(initalValue) {

    const [state, setState] = useState(initalValue)

    let prevState = useRef(initalValue)

    useEffect(() => {
        console.log(`State changed: from ${prevState.current} to: ${state}`)
        prevState.current = state
    }
        , [state])

    function Setter(value) {
        setState(value)

    }


    return [state, setState]

}

export default useStateWithLogger