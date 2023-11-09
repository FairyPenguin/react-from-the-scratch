import { useState, useEffect } from 'react';

function PokemonCaching() {
    const [input, setInput] = useState("")
    const [inputPokemon, setInputPokemon] = useState("")
    const [pokemon, setPokemon] = useState({
        name: "",
        weight: "",
        image: ""
    })

    const [errorMessage, setErrorMessage] = useState(false)



    const URL =
        `https://pokeapi.co/api/v2/pokemon/${input}`

    useEffect(
        () => {

            const fetchHandler = async () => {
                try {
                    const response = await fetch(URL)
                    const Data = await response.json()
                    // if (!response.ok) {
                    //     console.log("Error...Fetching Failed")
                    //     setErrorMessage(true)
                    // }

                    const pokemonName = Data.name
                    const pokemonWeight = Data.weight
                    const pokemonImage = Data.sprites.other["official-artwork"].front_default

                    setPokemon({
                        name: pokemonName,
                        weight: pokemonWeight,
                        image: pokemonImage
                    })



                } catch (error) {
                    // console.log(error)
                    // setErrorMessage(true)

                }

            }
            fetchHandler()
        }, [URL])



    function handelSubmit(e) {
        e.preventDefault()
        setInputPokemon(input)
        console.log(inputPokemon)
        console.log(URL)
        setInput("")
    }


    function inputHandler(e) {

        let inputValue = e.target.value

        setInput(inputValue)
    }




    return (
        <>
            <label style={{ display: "block", marginBottom: "1rem" }} htmlFor="pokemon">
                <input
                    onChange={inputHandler}
                    id="pokemon"
                    type="text"
                    name="pokemon"
                    value={input}
                />

            </label>
            <button style={{ display: "block", marginBottom: "1rem" }}
                onClick={handelSubmit}
                type='submit'
            >
                <p>Search</p>
            </button>



            {errorMessage ? "Error from the API" :

                <div  >
                    <h1>Name: {pokemon["name"]}</h1>
                    <img
                        style={{ width: "200px", height: "200px" }} src={pokemon["image"]} alt="" />
                    <p>Weight: {pokemon["weight"]}</p>
                </div >}
        </>
    )
}

export default PokemonCaching