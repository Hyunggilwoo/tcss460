  // show filtered countries
import Country from './Country'
const Display = () => {
if ( filteredCountries.length > 10) {
    return (
    <div>
        <p> Too many matches, please be more specific </p> 
    </div>
    )
}

if ( filteredCountries.length === 1) {
    // const countryData = filteredCountries[0];
    // if (countryData.name && typeof countryData.name === 'object') {
    return <Country {...countryDetail} />;

}
return (
    filteredCountries.map((country, index )=> {
        return (
            <div>
            <li key={index}> {country} </li>
            </div>
        )
    }
    )
)

}

export default Display