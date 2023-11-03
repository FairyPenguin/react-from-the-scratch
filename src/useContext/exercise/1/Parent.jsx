import { createContext } from 'react';
import Child from "./Child"

const MonkeyContext = createContext();

const State = 123;

function Parent() {


    return (
        <div>
            <h1>Parent</h1>

            <MonkeyContext.Provider value={State}>

                <Child />

            </MonkeyContext.Provider>

        </div>
    )
}

export default Parent

export { MonkeyContext }