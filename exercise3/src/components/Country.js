const Country = ({country}) => {
    // const { name, capital, languages, flag } = countryData

    // const languagesList = languages ? Object.values(languages) : [];

    return (
        <div>
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <p> Population: {country.population}</p>
            <p>Languages:</p>
            <div>
                <ul>
                    {country.languages.map((lang) => <li key={lang.name}> {lang.name}</li>)}
                </ul>

            </div>
            <img src={country.flag} alt="Country Flag"/>
        </div>
        
    )
    // Need to return the list of languages used in each country
}


export default Country