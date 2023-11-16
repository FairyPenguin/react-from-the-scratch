import { useEffect, useState } from 'react'



function PokemonPagination() {


    const [pages, setPages] = useState([])

    const [offset, setOffset] = useState(0)

    // const [URL, setURL] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)

    const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon/")

    const [nextPage, setNextPage] = useState(false)

    const [previousPage, setPreviousPage] = useState(false)

    //nexturl set nexturl = set(data.next)



    useEffect(
        () => {



            async function Fetcher() {

                try {
                    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
                    const response = await fetch(URL)
                    const Data = await response.json()
                    // console.log(Data);

                    const pokemonName = Data.results
                    const nextPageData = Data.next
                    const previousData = Data.previous
                    setNextPage(nextPageData)
                    setPreviousPage(previousData)
                    setPages(pokemonName)
                } catch (error) {
                    console.log(error)
                }



            }
            // console.log(pages)

            Fetcher()

        }, [URL, offset])





    // useEffect(
    //     () => {
    //         async function nextHandler() {



    //             const response = await fetch(URL)
    //             // console.log(nextPage)
    //             // console.log(response);
    //             const Data = await response.json()

    //             const pokemonName = Data.results

    //             setPages(pokemonName)

    //             // const NextPageURL = Data.next

    //             // setNextPage(NextPageURL)




    //         }

    //         nextHandler()
    //     }

    //     , [URL])


    function nextPageHandler() {
        if (nextPage) {

            setURL(nextPage)
        }
        // console.log(e)
        // setOffset(() => offset + 20)

        console.log(offset)

    }

    function previousHandler() {

        if (previousPage) {
            setURL(previousPage)
        }
        // setOffset(() => offset - 20)


    }


    return (
        <>
            <div>
                <h2>PokemonCaching</h2>
                <button
                    onClick={previousHandler}
                >
                    <p>Previous</p>
                </button>
                <br />
                <button onClick={nextPageHandler}>
                    <p>Next</p>
                </button>


                {pages.map((page) => {
                    return (

                        <p key={page.name}>{page.name}</p>
                    )
                })


                }

            </div >
        </>
    )


}

export default PokemonPagination

