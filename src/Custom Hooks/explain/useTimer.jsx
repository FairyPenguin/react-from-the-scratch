import { useState, useEffect } from 'react'

function useTimer(startTime = 0) {
    const [timer, setTimer] = useState(startTime)



    useEffect(
        () => {
            const time = setInterval(
                () => {
                    setTimer((prev) => prev + 1)
                    // setTimer(() => time + 1)
                }, 10000)
            return () => {
                clearInterval(time)
            }
        },
        [])

    return timer

}

export default useTimer