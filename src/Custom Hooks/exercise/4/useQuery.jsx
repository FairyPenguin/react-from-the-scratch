import { useEffect, useState, useRef } from 'react'

function useQuery(URL) {

    const [urlState, setUrlState] = useState("")
    
    const [fetchedData, setFetchedData] = useState("")


    const cache = useRef(new Map())

    useEffect(() => {

        async function fetchHandler() {
            try {

                const response = await fetch(URL)
                const Data = await response.json()

                cache.current.set(Data)

                console.log(Data)

                setFetchedData(Data)


            } catch (error) {

                console.log(error)

            }


        }

        fetchHandler()

    }, [URL])

    return fetchedData

}

export default useQuery