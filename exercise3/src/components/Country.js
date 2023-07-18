import Map from './Map'
import { Link } from 'react-router-dom'
const Country = ({country}) => {

    return (
        <div>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p> Population: {country.population}</p>
            <p>Languages:</p>
            <div>
                <ul>
                    {Object.values(country.languages).map((language, index) => <li key={index}> {language}</li>)}
                </ul>

            </div>
            <img src={country.flags.png} alt="Country Flag"/>

            <Link to={`/map/${country.latlng[0]}/${country.latlng[1]}`}>View on Map</Link>
            {/* <Map latVal={country.latlng[0]} lngVal={country.latlng[1]}/> */}
        </div>
        
    )
    // Need to return the list of languages used in each country
}


export default Country