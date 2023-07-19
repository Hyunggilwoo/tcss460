import ReactDOM from "react-dom/client"

import App from '../App'

const Person = ({ person }) => {
    return (
        <li>{person.name}
            {person.weight && `, ${person.weight}`}</li>
    )
}

export default Person;