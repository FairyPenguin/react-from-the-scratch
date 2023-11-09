import { useState } from 'react'

function Names() {

    const [names, setNames] = useState([])
    const [input, setInput] = useState("")

    function handleInput(e) {

        const inputValue = e.target.value

        setInput(inputValue)
        // console.log(name)
    }

    function handleClick(e) {
        e.preventDefault()

        setNames((prevState) => [...prevState, input])

        setInput("")
        console.log(names)
    }

    const filteredNames = names.filter((name) =>
        name.startsWith("A", 0)
    )

    return (
        <div>

            <h2>Names</h2>
            <label htmlFor="name">

                <input
                    type="text"
                    name="name"
                    id="name"
                    value={input}
                    onChange={handleInput}
                />


            </label >
            <br />

            <button style={{ marginTop: "1 rem" }}
                // type='submit'
                onClick={handleClick}>
                <p>Submit</p>
            </button>

            {filteredNames.map((name) => {
                return (
                    <p key={name.index}>{name}</p>
                )
            })

            }
        </div>
    )
}

export default Names



function normalize(score) {
    return 2 * score + 10;
}


const params = { score: 400, normalizeFunction: normalize };

function normalizeScore(params) {

    let theScore = params["score"]
    console.log(theScore)

    let normalizFunc = params["normalizeFunction"]
    console.log(normalizFunc)

    let NormalScore = normalizFunc(theScore)


    return NormalScore
}
console.log(normalizeScore(params))
// => 810