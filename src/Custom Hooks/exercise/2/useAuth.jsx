import { useState, useEffect } from "react"



function useAuth() {
    const [logged, setLogged] = useState(false)

    useEffect(() => {

        const log = setInterval(() => {

            setLogged(true)

        }, 1000)

        // return clearInterval(log)
        // console.log(logged)

    }, [logged])

    return logged
}

export default useAuth