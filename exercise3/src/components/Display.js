  // show filtered countries
import React from 'react'
import Country from './Country'
const Display = ({countries, setCountries}) => {
    console.log('render', countries.length, 'country')

    if ( countries.length > 10) {
        return (
        <div>
            <p> Too many matches, please be more specific </p> 
        </div>
        )
    } else if ((countries.length > 1 && countries.length <= 10) || countries.length === 0) {
        return (
            <div>
                <ul className="list-group">
                    {countries.map((country, index) =>
                        <li key={index} className="list-group-item"> {country.name.common} 
                            <button type="button" className="btn btn-primary btn-sm" 
                                    onClick={() => setCountries([country])}> Show
                            </button>
                        </li>)}
                </ul>
            </div>


        )
    } else {
        return (
            <Country country={countries[0]}/>
        )
    }
}

export default Display