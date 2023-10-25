//Learn Props


function Paragraph({ who, Time = 3, source, children }) {
    return (
        <div>
            {children}

            <p>This Paragraph text is coming form a {source} </p>
            <h1>{who} Are Coming after {Time} Days</h1>
        </div>
    )
}



export default Paragraph

