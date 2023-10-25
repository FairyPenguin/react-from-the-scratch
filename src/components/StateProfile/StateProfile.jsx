
import { useState } from "react"
import ProfileButton from "./ProfileButton/ProfileButton"

function StateProfile() {

    const [login, setLogin] = useState("Logged In")

    function handleClick() {

        // opposite the prevState
        login === "Logged In" ? setLogin("Loggedout") : setLogin("Logged In")

    }


    return (
        <div>StateProfile
            <p>{login}</p>

            <ProfileButton hancleClick={handleClick} />
        </div>
    )
}

export default StateProfile