import { useState, useEffect } from 'react'

function Pokemon() {

    //state
    const [pokemon, setPokemon] = useState({
        name: "",
        weight: "",
        image: ""
    })

    const URL = "https://pokeapi.co/api/v2/pokemon/squirtle"


    useEffect(
        () => {

            const Fetcher = async () => {

                try {

                    const response = await fetch(URL)

                    const Data = await response.json()

                    const pokemonName = Data.name

                    const image = Data.sprites.other["official-artwork"].front_default

                    const weight = Data.weight

                    setPokemon({
                        name: pokemonName,
                        weight: weight,
                        image: image,
                    })


                    if (!response.ok) {
                        console.log("Error")
                    }

                } catch (error) {
                    console.log(`${error} Error...Fethcing Data Failed`)
                }

            }

            Fetcher()

        },
        [])

    return (

        <div>
            <h1>Name: {pokemon["name"]}</h1>
            <img
                style={{ width: "200px", height: "200px" }} src={pokemon["image"]} alt="" />
            <p>Weight: {pokemon["weight"]}</p>
        </div>
    )
}

export default Pokemon