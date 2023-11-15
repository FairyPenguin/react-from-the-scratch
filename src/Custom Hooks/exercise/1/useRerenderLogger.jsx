import { useEffect } from "react"

function UseRerenderLogger(componentName) {

    useEffect(() => {
        console.log(
            `${componentName} has mounted!`)
    }, [])


    useEffect(() => {
        console.log(
            `${componentName} has re-rendered`)
    })


}

export default UseRerenderLogger