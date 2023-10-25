import Card from "../Card/Card"


function Profile({ profileTitle, cardTitle, ButtonText, clickHandler }) {
    return (
        <>
            <h1>This is the {profileTitle}</h1>

            <Card
                what={cardTitle}
                buttonText={ButtonText}
                buttonClickhandler={clickHandler}
            />
        </>
    )
}

export default Profile

