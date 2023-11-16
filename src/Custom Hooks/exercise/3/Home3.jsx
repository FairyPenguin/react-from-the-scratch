import useStateWithLogger from "./useStateWithLogger"


function Home3() {

    const [click, setClick] = useStateWithLogger(0)

    function clickHandler() {

        setClick(click + 1)
        console.log('5000');


    }

    return (
        <div>
            <h3>Home</h3>
            <p>{click}</p>
            <button
                onClick={clickHandler}
            >
                <p>Click!</p>
            </button>
        </div>)
}

export default Home3