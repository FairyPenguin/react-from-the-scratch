import { useRef, useState } from "react"

function RefForm() {
    const [values, setValues] = useState("")
    // const nameRef = useRef(null)
    // const emailRef = useRef(null)
    // const ageRef = useRef(null)
    const formRef = useRef(null)



    function submitHandler(e) {

        e.preventDefault()

        // const values = `
        // name: ${nameRef.current.value} | email: ${emailRef.current.value} | Age: ${ageRef.current.value}`

        console.log(values)


        const inputs = formRef.current

        console.log(inputs)

        const formData = new FormData(e.target)

        let inputValues = ""

        for (const [name, value] of formData) {
            console.log([name, value])
            inputValues += `${name}: ${value} `
            console.log(inputValues)
        }


        setValues(inputValues)
        //reset  values[clear form fields]

        formRef.current.reset();





    }

    return (
        <div>
            <form ref={formRef} onSubmit={submitHandler}>
                <label htmlFor="">Name
                    <input name="name" type="text" />
                </label>
                <label htmlFor="">Email
                    <input name="email" type="email" />
                </label>
                <label htmlFor="">Age
                    <input name="age" type="number" />
                </label>

                <button type="submit">
                    <p>Submit</p>
                </button>
            </form>

            <p>{values}</p>
        </div>
    )
}

export default RefForm