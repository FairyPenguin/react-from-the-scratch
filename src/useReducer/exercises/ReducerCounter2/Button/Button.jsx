
function Button({ ButtonText, action, dispatchCount }) {

    function Add() {
        dispatchCount(action)
    }

    return (




        <button onClick={Add}>

            <p>{ButtonText}</p>

        </button >


    )
}

export default Button