function Button({ elementType, eventHandler }) {
    return (
        <>
            <button onClick={eventHandler}>
                <p style={{ color: "white" }}>This element is a {elementType}</p>
            </button>
        </>
    )
}

export default Button