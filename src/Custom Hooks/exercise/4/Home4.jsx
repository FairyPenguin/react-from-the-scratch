import { useState } from "react"
import useQuery from "./useQuery"

function Home4() {
    const [urlInput, setUrlInput] = useState("")
    const [Input, setInput] = useState("")
    const [pokemon, setPokemon] = useState("")

    const fetchApi = useQuery("https://pokeapi.co/api/v2/pokemon/ditto")

    console.log(fetchApi.name);


    function clickHandler(e) {
        e.preventDefault()
    }

    function inputHandler(params) {

    }


    return (
        <>
            <section>
                <label style={{ display: "block", paddingBottom: "2rem" }}
                    htmlFor="pokemon">Pokemon Name
                    <input
                        style={{ display: "block", paddingBottom: "2rem" }}
                        // onChange={inputHandler}
                        // value={""}
                        name="pokemon"
                        id="pokemon"
                        type="text"
                    />
                </label>

                <button
                    type="submit"
                // onClick={clickHandler}
                >
                    <p>Search Pokemons</p>
                </button>
            </section>

            <section>
                <h3>{fetchApi.name}</h3>
                <p>Pokemon Weight</p>
                <img src="/" alt="pokemon-image" />
            </section>

        </>
    )
}

export default Home4