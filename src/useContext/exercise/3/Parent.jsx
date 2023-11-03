import { createContext } from 'react'
import Child from './Child'


const StringContext = createContext()

const NumberContext = createContext()

const name = "Turtle"
const age = 20


function Parent() {
    return (

        <div>

            <p>Parent</p>

            <StringContext.Provider
                value={name}>

                <NumberContext.Provider
                    value={age}>

                    <Child />

                </NumberContext.Provider>

            </StringContext.Provider>

        </div>
    )
}

export default Parent

export { NumberContext, StringContext }