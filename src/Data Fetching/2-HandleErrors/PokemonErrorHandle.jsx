import { useState, useEffect } from 'react'

function PokemonErrorHandle() {

    const [pokemon, setPokemon] = useState({
        name: "",
        weight: "",
        image: ""
    })

    const [errorMessage, setErrorMessage] = useState(false)

    const URL = "https://pokeapi.co/api/v2/pokemon/ditto"

    useEffect(
        () => {

            const fetchHandler = async () => {
                try {
                    const response = await fetch(URL)
                    // console.log(response)
                    const Data = await response.json()

                    if (!response.ok) {
                        console.log("Error...Fetching Failed")
                        setErrorMessage(true)
                    }

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
                    setErrorMessage(true)

                }
            }
            fetchHandler()
        },
        [])


    return (

        <>
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


export default PokemonErrorHandle