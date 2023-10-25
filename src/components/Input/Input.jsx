
function Input() {


    function changeHandler(e) {

        const inputValue = e.target.value

        const consoleMessage = `[INPUT id=ex1]:  ${inputValue}`

        console.log(consoleMessage)

    }

    return (
        <div>
            <input onChange={changeHandler}
                type="text" id="ex1" />
        </div>
    )
}

export default Input