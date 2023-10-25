import Header from "../Header/Header.jsx"
import Paragraph from "../Paragraph/Paragraph.jsx"
import Button from "../Button/Button.jsx"

function handleClick() {
    console.log("geeeeeeeeez!")
}

function Section() {
    return (
        <div>
            <p>Section</p>

            <Button elementType="button" eventHandler={handleClick} />
            <Header unknown={"Title"} source={"props"} />
            <Paragraph who="Props" source={"props"} />

        </div>
    )
}

export default Section