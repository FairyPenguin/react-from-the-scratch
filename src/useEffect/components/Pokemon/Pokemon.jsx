import { useState, useEffect } from 'react'

function Pokemon() {

    const [image, setImage] = useState("")


    const URL = "https://pokeapi.co/api/v2/pokemon/caterpie"

    useEffect(
        () => {
            const fetchHandler = async () => {
                try {
                    // get pokemon name in input and get the image

                    const response = await fetch(URL)

                    const Data = await response.json()

                    const imageURL = Data.sprites.other["official-artwork"].front_default
                    setImage(imageURL)

                    console.log(Data.sprites.other)
                    if (!response.ok) {
                        console.log("Error")
                    }

                } catch (error) {

                    console.log(`${error} "Error...Fetching Failed"`)
                }
            }

            fetchHandler()

        }, []

    )



    return (



        <div>
            <h1>Mankey</h1>
            <img src={image} alt="" />
        </div>
    )
}

export default Pokemon