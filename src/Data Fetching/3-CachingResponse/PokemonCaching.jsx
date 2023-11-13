import { useState, useEffect, useRef } from 'react';


function PokemonCaching() {
    //States
    const [input, setInput] = useState("")
    const [inputPokemon, setInputPokemon] = useState("")
    const [pokemon, setPokemon] = useState({
        name: "",
        weight: "",
        image: ""
    })
    const [errorMessage, setErrorMessage] = useState(false)

    //Cache Map using useRef

    const PokemonCacheRef = useRef(new Map())

    //URL 
    const URL =

        `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`

    // Input-Field Handler Function 

    function inputHandler(e) {

        let inputValue = e.target.value

        setInput(inputValue)

    }

    // Submit Button Handler Function 


    function handelSubmit(e) {
        e.preventDefault()

        setInputPokemon(input)

        // Clear the input field after submitting
        setInput("")

    }

    //Effect
    useEffect(
        () => {

            const fetchHandler = async () => {
                // try

                try {
                    //check if the input if empty

                    if (inputPokemon === "") {
                        return null
                    }

                    //check if the input is already vailable in the Cache

                    if (PokemonCacheRef.current.has(inputPokemon)) {
                        console.log("IT's Here DUDE")
                        setPokemon(PokemonCacheRef.current.get(inputPokemon))
                        console.log(PokemonCacheRef.current.get(inputPokemon))

                    } else {

                        // fetch the Pokemnon data 

                        const response = await fetch(URL)
                        const Data = await response.json()

                        const pokemonName = Data.name
                        const pokemonWeight = Data.weight
                        const pokemonImage = Data.sprites.other["official-artwork"].front_default
                        // Pass pokemon data to the Pokemon State 
                        setPokemon({
                            name: pokemonName,
                            weight: pokemonWeight,
                            image: pokemonImage
                        })

                        // Pass pokemon data to the Cache (Ref (Map)) 

                        PokemonCacheRef.current.set(inputPokemon,
                            {
                                name: pokemonName,
                                weight: pokemonWeight,
                                image: pokemonImage
                            })
                    }

                }

                catch (error) {
                    // Error case
                    console.log(error)
                    inputPokemon === "" ? setErrorMessage(false) : ""
                    error ? setErrorMessage(true) : ""
                }

            }

            fetchHandler()
        }, [URL, inputPokemon])




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
            <button
                style={{ color: "wheat", border: "5px solid wheat", width: "100%", display: "block", marginBottom: "1rem" }}
                onClick={handelSubmit}
                type='submit'
            >
                <p>Search</p>
            </button>



            {errorMessage ? "Check the correct pokemon name" :

                <div  >
                    <h1>Name: {pokemon["name"]}</h1>
                    <img
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                        src={pokemon["image"] === ""
                            ? "https://www.pangea.global/wp-content/uploads/2022/08/Pokemon-Part-01_Picture-2.jpg"
                            : pokemon["image"]}
                        alt="" />
                    <p>Weight: {pokemon["weight"]}</p>
                </div >}
        </>
    )
}

export default PokemonCaching