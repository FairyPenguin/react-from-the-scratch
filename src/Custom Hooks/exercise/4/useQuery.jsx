import { useEffect, useState, useRef } from 'react'

function useQuery(URL) {

    const [urlState, setUrlState] = useState("")

    useEffect(() => {

        async function fetchHandler() {
            try {

                const response = await fetch(URL)
                const Data = await response.json()
                console.log(Data)

            } catch (error) {

                console.log(error)

            }
        }

        fetchHandler()

    }, [URL])


    return (
        <div>useQuery</div>
    )
}

export default useQuery