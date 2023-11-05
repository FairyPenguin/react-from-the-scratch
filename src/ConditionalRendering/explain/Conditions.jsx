
function Conditions() {
    // return (
    //     <div>Conditions</div>
    // )
    const value = true

    if (value) {
        return <h1>It's True</h1>
    }
    return <h1>False!</h1>
}

export default Conditions


export function limesToCut(wedgesNeeded, limes) {

    let wedgesArray = []

    let limesNeeded = 0



    for (let i = 0; i < limes.length; i++) {
        let element = limes[i];

        if (element === "small") {
            wedgesArray.push(6)
        } else if (element === "meduim") {
            wedgesArray.push(8)
        } else {
            wedgesArray.push(10)
        }
    }

    console.log(wedgesArray) // string to numbers Array



    return limesNeeded

}


console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])
)
