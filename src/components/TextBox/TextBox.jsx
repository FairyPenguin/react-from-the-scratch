import { useState } from "react"


function TextBox() {
    const [text, setText] = useState("")


    function inputHandler(e) {

        const enteredValue = e.target.value
        console.log(enteredValue);
        setText(enteredValue)

    }

    return (
        <>
            <h1>{text}</h1>
            <input onChange={inputHandler} type="text" />
        </>

    )
}

export default TextBox