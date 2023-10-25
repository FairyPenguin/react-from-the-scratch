
function Table() {


    function clickHandler(e) {

        const cellValue = e.target.textContent

        console.log(cellValue)

    }

    return (
        <div>
            <p >Table</p>

            <table onClick={clickHandler}>
                <thead>
                    <tr>
                        <th><p>Subject</p></th>
                        <th><p>Mark</p></th>
                        <th><p>Grade</p></th>
                    </tr>
                </thead>

                <tbody>


                    <tr>
                        <td>
                            <p>Math</p>
                        </td>
                        <td>
                            <p>Science</p>
                        </td>
                        <td>
                            <p>Art</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>C</p>
                        </td>
                        <td>
                            <p>B</p>
                        </td>
                        <td>
                            <p>A+</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table