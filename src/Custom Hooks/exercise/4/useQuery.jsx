import { useEffect, useState, useRef } from 'react'

function useQuery(URL) {

    const [errorMessage, setErrorMessage] = useState(false)

    const [fetchedData, setFetchedData] = useState("")

    const pokemonCache = useRef(new Map())


    useEffect(() => {

        console.log(URL)

        async function fetchHandler() {

            try {

                const response = await fetch(URL)
                const Data = await response.json()

                setFetchedData(Data)

                console.log(Data)

                pokemonCache.current.set(URL, Data)



            } catch (error) {

                console.log(error)
            }

        }

        fetchHandler()

    }, [URL])

    function reFetcher(urlToFetch) {

        // check for the cached data first
        if (pokemonCache.current.has(urlToFetch)) {
            setFetchedData(pokemonCache.current.get(urlToFetch))

        } else {
            try {

                const fetchFunc = async () => {

                    const response = await fetch(urlToFetch)
                    const Data = await response.json()
                    pokemonCache.current.set(urlToFetch, Data)
                    setFetchedData(Data)
                }

                fetchFunc()

            } catch (error) {
                console.log(error);



            }

        }



    }

    return { fetchedData, reFetcher }

}

export default useQuery