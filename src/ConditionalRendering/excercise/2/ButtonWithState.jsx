import { useState } from 'react'

function ButtonWithState({ loading }) {

    const [buttonText, setButtonText] = useState(true)

    const text = buttonText === true ? "Loading..." : "Click me!"

    function toggle() {

        setButtonText((prevState) => !prevState)

    }


    return (
        <div>
            <p>ButtonWithState</p>
            <button onClick={toggle}>
                <p>{text}</p>
            </button>
        </div>
    )
}

export default ButtonWithState