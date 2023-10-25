import Button from "../Button/Button"



function Card({ what, buttonText, buttonClickhandler }) {
    return (

        <>
            <h2>This is the {what} element</h2>

            <Button elementType={buttonText} eventHandler={buttonClickhandler} />
        </>

    )
}

export default Card