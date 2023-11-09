import { useState } from 'react'

function Auth() {
    const [password, setPassword] = useState("")

    const Validation = password === "secret"
        ? "Successfully logged in!"
        : "Enter correct password"


    function authInput(e) {

        console.log(e.target.value)

        const authValue = e.target.value

        setPassword(authValue)

    }

    return (
        <div>
            <h2>Auth</h2>
            <label htmlFor="password">
                <input
                    type="text"
                    name="password"
                    id="password"
                    onChange={authInput}
                />
            </label>
            <p>{Validation}</p>
        </div>
    )
}

export default Auth