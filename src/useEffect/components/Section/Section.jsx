import { useEffect, useState } from 'react'

function Section() {
    const [time, setTime] = useState(0)

    useEffect(
        () => {
            console.log("Section has re-rendred")

        }
    )

    useEffect(
        () => {
            const timer = setInterval(
                () => {
                    setTime(prevTime => prevTime + 1)
                }, 1000
            )

            return () => {
                clearInterval(timer)
            }
        }, []
    )




    return (

        <div>
            <h2>Time on page: {time} seconds</h2>
        </div>
    )
}

export default Section