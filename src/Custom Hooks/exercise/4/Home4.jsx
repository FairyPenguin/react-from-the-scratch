import { useState } from "react"
import useQuery from "./useQuery"

function Home4() {
    const [pokemon, setPokemon] = useState("")

    const fetchApi = useQuery("https://pokeapi.co/api/v2/pokemon/ditto")

    console.log(fetchApi.name);


    return (
        <div>
            <h3>{fetchApi.name}</h3>
            {/* <h2>{fetchApi.name}</h2> */}

        </div>
    )
}

export default Home4