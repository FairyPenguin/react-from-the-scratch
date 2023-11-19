import { useState } from "react"
import useQuery from "./useQuery"

function Home4() {

    const intialURL = "https://pokeapi.co/api/v2/pokemon/squirtle"
    const { fetchedData, reFetcher } = useQuery(intialURL)

    const [urlInput, setUrlInput] = useState("")
    const [Input, setInput] = useState("")

    //No input in the starte so the URL is just the all pokemons lists so
    //no name image etc!
    //so you need to provdide the full url for the start one at least
    // or conditonaly rendering the 

    const URL = `https://pokeapi.co/api/v2/pokemon/${Input}`


    console.log(fetchedData?.name)



    function inputHandler(e) {
        const PokemonName = e.target.value
        setInput(PokemonName)

    }


    function clickHandler() {
        // e.preventDefault()
        // setUrlInput(Input)

        reFetcher(URL)

    }



    return (
        <>
            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <label style={{ display: "block", paddingBottom: "2rem" }}
                    htmlFor="pokemon">Pokemon Name
                    <input
                        style={{ display: "block", paddingBottom: "2rem" }}
                        onChange={inputHandler}
                        value={Input}
                        name="pokemon"
                        id="pokemon"
                        type="text"
                    />
                </label>

                <button
                    type="submit"
                    onClick={clickHandler}
                >
                    <p>Search Pokemons</p>
                </button>
            </section>



            {/* <h2>Couldnt find the pokemon, Check the correct name</h2> */}

            {/* Lesson is ?. */}
            <section>
                <h3>{fetchedData?.name}</h3>
                <p>{fetchedData?.weight}</p>
                <p>{fetchedData?.id}</p>
                <p>{fetchedData?.type}</p>

                <img

                    style={{ width: "200px", height: "200px" }}
                    src={fetchedData.sprites?.front_default}

                // alt={fetchedData.name}
                />
            </section >





        </>
    )
}

export default Home4