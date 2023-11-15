import { useState, useEffect } from "react"



function useAuth() {
    const [logged, setLogged] = useState(false)

    useEffect(() => {

        const log = setTimeout(() => {

            setLogged(true)

        }, 3000)


    }, [])

    return logged
}

export default useAuth