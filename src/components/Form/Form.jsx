
function Form() {

    function formSubmit(e) {
        e.preventDefault()


        console.log(e.target[0].value)

        const firstName = e.target[0].value
        const lastName = e.target[1].value
        const age = e.target[2].value


        console.log(firstName, lastName, age)

        const formData = new FormData(e.target)

        for (const entry of formData.entries()) {
            console.log(entry)
        }

      

    }

    return (
        <div>
            <p>Form</p>

            <form onSubmit={formSubmit}>

                <label htmlFor="Firstname"><input placeholder="First Name" id="Firstname" name="Firstname" type="text" /
                >Firstname</label>

                <label htmlFor="Lastname"><input placeholder="Last Name" id="Lastname" name="Lastname" type="text" />Lastname</label>

                <label htmlFor="Age"><input id="Age" placeholder="Age" name="Age" type="number" />Age</label>

                <button type="submit" >
                    <p>Submit</p>
                </button>

            </form>
        </div>
    )
}

export default Form