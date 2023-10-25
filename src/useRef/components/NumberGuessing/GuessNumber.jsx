
import { useState, useEffect, useRef } from 'react';



function GuessNumber() {

    const [score, setScore] = useState("")
    // const [guess, setGuess] = useState("")

    const random = useRef(null)

    const guessInputRef = useRef(null)


    useEffect(
        () => {

            random.current = Math.floor(Math.random() * 10)
            console.log(`${random.current} Log`)

        }, []

    )


    function guessHandler() {

        let { value: inputGuess } = guessInputRef.current

        inputGuess = Number(inputGuess)

        const gussedNumber = random.current
        console.log(gussedNumber)

        // conditional Rendering for the Result

        inputGuess > gussedNumber ? setScore("Too high") : inputGuess < gussedNumber ? setScore("Too low") : setScore("You win")

    }





    return (
        <div>
            <p>GuessNumber</p>
            <label htmlFor="">
                <p>Enter the Number</p>
                <input ref={guessInputRef} type="text" />
            </label>
            <br />
            <br />
            <button onClick={guessHandler}>
                <p>Guess! without any Stress</p>
            </button>

            <p>{score}</p>
        </div>
    )
}

export default GuessNumber