import PropTypes from "prop-types"

function User({ name, age }) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
        </div>
    )
}

User.ProtoTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default User