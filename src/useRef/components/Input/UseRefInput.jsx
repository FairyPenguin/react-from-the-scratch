import { useRef } from "react"


function Input() {
    const inputRef = useRef(null)

    function clickHandler() {

        console.log(inputRef.current)

        inputRef.current.focus()
    }

    return (
        <div>
            <label htmlFor=""> Text
                <input ref={inputRef} type="text" />
            </label>
            <br />
            <button onClick={clickHandler}>
                <p>Focus</p>
            </button>
        </div>
    )
}

export default Input