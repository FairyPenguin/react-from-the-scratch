import React from 'react'

function Button({ loading }) {

    //Another cleaner way is

    const textValue = loading ? "loading..." : "click me!"

    return (
        <div>
            <h1>Button</h1>
            <button>
                <p>{loading === true ? "loading..." : "click me!"}</p>
                <br />
                <p>{textValue}</p>
            </button>
        </div>
    )

    // if (loading === true) {
    //     return (
    //         <div>
    //             <h1>Button</h1>
    //             <button>
    //                 <p>Loading...</p>
    //             </button>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Button</h1>
    //             <button>
    //                 <p>Click me!</p>
    //             </button>
    //         </div>
    //     )


}





export default Button