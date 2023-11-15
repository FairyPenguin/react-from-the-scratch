import useAuth from "./useAuth"

function Home() {

    const loggedIn = useAuth()

    return (
        <div>
            <h2>Home</h2>
            <h1>{loggedIn === true ? "LoggedIn" : "LoggedOut"}</h1>
        </div>

    )
}

export default Home