import { useState } from "react"

function StateForm() {

    const [inputValues, setInputValues] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lasstName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [vlaueText, setValuesText] = useState("")

    function submitHandler(e) {

        //prevent form defualt behaviour 
        e.preventDefault()

        setValuesText(`fname: ${firstName} | lname: ${lasstName} | email: ${email} `)

        // clear the fields values with empty string
        // by reseting the state
        // [need value attribute to be passed the state value to work]

        setEmail("")
        setFirstName("")
        setlastName("")

        // const formData = new FormData(e.target)

        // for (const entry of formData.entries()) {
        //     console.log(entry)
        //     const values = entry
        //     console.log(values)
        //     setInputValues(values)

        // }
    }

    function handleEmail(e) {

        setEmail(e.target.value)

    }


    function handleLastName(e) {

        setlastName(e.target.value)

    }

    function handleFirstName(e) {

        setFirstName(e.target.value)

    }

    return (

        <>
            <h1>State-Form</h1>
            <form onSubmit={submitHandler}>

                <label htmlFor="firstName">
                    <input value={firstName} onChange={handleFirstName} id="firstName" name="firstName" type="text" />
                </label>

                <label htmlFor="lastName">
                    <input value={lasstName} onChange={handleLastName} id="lastName" name="lastName" type="text" />
                </label>

                <label htmlFor="email">
                    <input value={email} onChange={handleEmail} id="email" name="email" type="email" />
                </label>

                <button type="submit">
                    <p>SUBMIT</p>
                </button>

            </form>

            <h1>
                <p> {vlaueText}  </p>
            </h1>

        </>
    )
}

export default StateForm