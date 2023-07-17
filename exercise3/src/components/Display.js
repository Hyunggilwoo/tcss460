  // show filtered countries
import React from 'react'
import Country from './Country'
const Display = ({countries, setCountries}) => {
    if ( countries.length > 10) {
        return (
        <div>
            <p> Too many matches, please be more specific </p> 
        </div>
        )
    } else if ((countries.length > 1 && countries.length < 10) || countries.length === 0) {
        return (
            <ul>
                {countries.map((country, index) =>
                    <li key={index}> {country.name} </li>)}
            </ul>

        )
    } else {
        return (
            <Country country={countries[0]}/>
        )
    }
}

export default Display